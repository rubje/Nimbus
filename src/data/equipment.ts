/** Equipment list on the About page. */
type L = { nl: string; en: string; fr: string };

export const equipment: { name: string; note: L }[] = [
  {
    name: 'DJI Avata 2',
    note: {
      nl: 'Compacte FPV-drone met ingebouwde propellerbescherming, veilig binnen en buiten. 4K-beeld, 10-bit D-Log M',
      en: 'Compact FPV drone with built-in prop guards, safe indoors and out. 4K footage, 10-bit D-Log M',
      fr: 'Drone FPV compact avec protections d’hélices intégrées, sûr en intérieur comme en extérieur. Image 4K, 10 bits D-Log M',
    },
  },
  {
    name: 'DJI FPV Remote Controller 3',
    note: {
      nl: 'Volledig handmatige besturing (manual mode) voor vloeiende, precieze lijnen',
      en: 'Full manual-mode control for smooth, precise lines',
      fr: 'Pilotage entièrement manuel pour des trajectoires fluides et précises',
    },
  },
  {
    name: 'DJI Goggles 3',
    note: { nl: 'Live beeld vanuit de drone, tot op de centimeter', en: 'Live view from the drone, down to the centimetre', fr: 'Vue en direct depuis le drone, au centimètre près' },
  },
  {
    name: 'Camtasia',
    note: { nl: 'Montage en afwerking', en: 'Editing and finishing', fr: 'Montage et finitions' },
  },
];
