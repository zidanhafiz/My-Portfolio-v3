import type { Metadata } from 'next';
import './globals.scss';
import { inter } from '@/utils/fonts';
import ModalProvider from '@/context/showModal';

export const metadata: Metadata = {
  title: 'Zidan Hafiz Rapiyani | Portfolio',
  description: `Explore my personal portfolio website to discover my projects, skills, and experience as a web developer. Learn about my work in frontend and backend development using Next.js, React.js, Express.js, PostgreSQL, Firebase, and Supabase. Let's connect and discuss how I can help bring your ideas to life!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
