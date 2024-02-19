'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import { ReactNode } from 'react';

export type Skills = {
  name: string;
  icon: () => ReactNode;
};

export const proLang: Skills[] = [
  {
    name: 'HTML',
    icon: () => <Icon icon='vscode-icons:file-type-html' />,
  },
  {
    name: 'CSS',
    icon: () => <Icon icon='vscode-icons:file-type-css' />,
  },
  {
    name: 'JavaScript',
    icon: () => <Icon icon='logos:javascript' />,
  },
  {
    name: 'TypeScript',
    icon: () => <Icon icon='logos:typescript-icon' />,
  },
];

export const framework: Skills[] = [
  {
    name: 'Tailwind',
    icon: () => (
      <Icon
        icon='logos:tailwindcss-icon'
        width='1rem'
        height='1rem'
      />
    ),
  },
  {
    name: 'React JS',
    icon: () => <Icon icon='skill-icons:react-dark' />,
  },
  {
    name: 'Next JS',
    icon: () => <Icon icon='devicon:nextjs' />,
  },
  {
    name: 'Node JS',
    icon: () => <Icon icon='devicon:nodejs' />,
  },
  {
    name: 'Express JS',
    icon: () => <Icon icon='skill-icons:expressjs-light' />,
  },
];

export const database: Skills[] = [
  {
    name: 'PostgreSQL',
    icon: () => <Icon icon='logos:postgresql' />,
  },
  {
    name: 'Firebase',
    icon: () => <Icon icon='logos:firebase' />,
  },
  {
    name: 'Supabase',
    icon: () => <Icon icon='logos:supabase-icon' />,
  },
];
