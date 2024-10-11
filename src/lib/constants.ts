import type { navLinkType } from './appTypes';

export const NAV_LINKS: navLinkType[] = [
  {
    link: '/o-projektu',
    text: 'O projektu',
  },
  {
    link: '/program',
    text: 'Program',
  },
  {
    link: '/temata',
    text: 'Témata',
  },
  {
    link: '/kde-to-bude',
    text: 'Kde to bude?',
  },
  {
    link: '/partneri',
    text: 'Partneři',
  },
  {
    link: '/jdu-do-toho',
    text: 'Jdu do toho!',
  },
] as const;
