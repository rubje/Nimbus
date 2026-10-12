/** Small progressive enhancements. The site works without this script. */

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Header: background on scroll, mobile menu ---------- */
const header = document.querySelector<HTMLElement>('[data-header]');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const nav = document.querySelector<HTMLElement>('[data-nav]');
if (toggle && nav) {
  const label = toggle.querySelector<HTMLElement>('[data-open-label]');
  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (label) label.textContent = open ? label.dataset.closeLabel! : label.dataset.openLabel!;
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
}

/* ---------- Hero background video ---------- */
const hero = document.querySelector<HTMLVideoElement>('[data-hero-video]');
const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
if (hero && !reducedMotion && !saveData) {
  hero.querySelectorAll<HTMLSourceElement>('source[data-src]').forEach((s) => (s.src = s.dataset.src!));
  hero.load();
  hero.addEventListener('playing', () => hero.classList.add('is-playing'), { once: true });
  hero.play().catch(() => {});
}

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reducedMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
}

/* ---------- Video modal (click-to-load YouTube, privacy mode) ---------- */
const modal = document.querySelector<HTMLDialogElement>('[data-video-modal]');
const frame = modal?.querySelector<HTMLElement>('[data-video-frame]');
if (modal && frame) {
  const close = () => modal.close();
  modal.addEventListener('close', () => (frame.innerHTML = ''));
  modal.querySelector('[data-video-close]')?.addEventListener('click', close);
  // Click on the backdrop closes the dialog.
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  document.addEventListener('click', (e) => {
    const trigger = (e.target as HTMLElement).closest<HTMLElement>('[data-video]');
    if (!trigger || typeof modal.showModal !== 'function') return;
    e.preventDefault();
    const params = new URLSearchParams({ autoplay: '1', rel: '0', playsinline: '1', modestbranding: '1' });
    if (trigger.dataset.start) params.set('start', trigger.dataset.start);
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(trigger.dataset.video!)}?${params}`;
    iframe.title = trigger.dataset.title || 'Video';
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.replaceChildren(iframe);
    modal.setAttribute('aria-label', iframe.title);
    modal.showModal();
  });
}

/* ---------- Work filter ---------- */
const work = document.querySelector<HTMLElement>('[data-work]');
if (work) {
  const filters = work.querySelector<HTMLElement>('[data-filters]')!;
  const buttons = filters.querySelectorAll<HTMLButtonElement>('[data-filter]');
  const cards = work.querySelectorAll<HTMLElement>('[data-category]');
  const empty = work.querySelector<HTMLElement>('[data-empty]')!;
  const status = work.querySelector<HTMLElement>('[data-filter-status]')!;
  filters.hidden = false;

  const apply = (cat: string) => {
    let shown = 0;
    cards.forEach((card) => {
      const match = cat === 'all' || card.dataset.category === cat;
      card.hidden = !match;
      if (match) {
        shown++;
        card.classList.add('is-visible');
      }
    });
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === cat)));
    empty.hidden = shown > 0;
    status.textContent = (status.dataset.template ?? "{n}").replace("{n}", String(shown));
    history.replaceState(null, '', cat === 'all' ? location.pathname : `#${cat}`);
  };

  buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.filter!)));
  const initial = location.hash.slice(1);
  if ([...buttons].some((b) => b.dataset.filter === initial)) apply(initial);
}

/* ---------- Contact form (Formspree via fetch, falls back to normal POST) ---------- */
const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
if (form) {
  const statusEl = form.querySelector<HTMLElement>('[data-form-status]')!;
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const label = submit.textContent;
    submit.disabled = true;
    submit.textContent = form.dataset.sending!;
    statusEl.removeAttribute('data-state');
    statusEl.textContent = '';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      statusEl.textContent = form.dataset.success!;
    } catch {
      statusEl.dataset.state = 'error';
      statusEl.textContent = form.dataset.error!;
    } finally {
      submit.disabled = false;
      submit.textContent = label;
    }
  });
}
