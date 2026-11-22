// Agent legend / list logos. Lived on window via the retired public/office.js shell;
// the Office4D page shell owns it after SWA-3639.
export const OFFICE_AGENT_BADGES = {
  claude: { label: 'Claude', short: 'Cl', color: '#c96442', logo: '/assets/agents/claude.png' },
  codex: { label: 'Codex', short: 'Cx', color: '#10a37f', logo: '/assets/agents/codex.png' },
  gemini: { label: 'Gemini', short: 'G', color: '#4f7cf0', logo: '/assets/agents/gemini.png' },
  omp: { label: 'OMP', short: 'OMP', color: '#a96926', logo: '/assets/agents/omp.svg' },
  grokbot: { label: 'Grok Bot', short: 'GB', color: '#2b2b2b', logo: '/assets/agents/grokbot.svg' },
  paperclip: { label: 'Paperclip', short: 'PC', color: '#6d5bd0', logo: '/assets/agents/paperclip.svg' },
};

export function installOfficeBadges(target = globalThis) {
  for (const badge of Object.values(OFFICE_AGENT_BADGES)) {
    if (badge.image) continue;
    if (typeof target.Image === 'function') {
      badge.image = new target.Image();
      badge.image.src = badge.logo;
    } else {
      badge.image = { src: badge.logo, complete: false, naturalWidth: 0 };
    }
  }
  target.OFFICE_AGENT_BADGES = OFFICE_AGENT_BADGES;
  return OFFICE_AGENT_BADGES;
}
