/** Equipment list on the About page. Replace with your actual gear. */
type L = { nl: string; en: string };

export const equipment: { name: string; note: L }[] = [
  {
    name: 'Cinewhoop (3,5")',
    note: { nl: 'Binnenvluchten met propellerbescherming', en: 'Indoor flights with prop guards' },
  },
  {
    name: '5" freestyle quad',
    note: { nl: 'Snelle buitenshots en manual-mode lijnen', en: 'Fast exterior shots and manual-mode lines' },
  },
  {
    name: 'DJI O4 / GoPro (4K, 10-bit)',
    note: { nl: 'Stabiel beeld, ruimte voor kleurcorrectie', en: 'Stabilised footage with room to grade' },
  },
  {
    name: 'DaVinci Resolve',
    note: { nl: 'Montage en kleurcorrectie', en: 'Editing and colour grading' },
  },
];
