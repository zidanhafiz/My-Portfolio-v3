import type { Metadata } from 'next';
import './globals.scss';
import { poppins } from '@/utils/fonts';
import ModalProvider from '@/context/showModal';
import Hero from './components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import SubmitAlert from '@/components/SubmitAlert/SubmitAlert';
import Footer from './components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Zidan Hafiz Rapiyani | Portfolio',
  description: `Explore my personal portfolio website to discover my projects, skills, and experience as a web developer. Learn about my work in frontend and backend development using Next.js, React.js, Express.js, PostgreSQL, Firebase, and Supabase. Let's connect and discuss how I can help bring your ideas to life!`,
  metadataBase: new URL('https://zidanhafiz.vercel.app'),
  openGraph: {
    images: [
      {
        url: './opengraph-image.png',
        width: 800,
        height: 600,
      },
      {
        url: './opengraph-image.png',
        width: 1800,
        height: 1600,
        alt: 'Issue Tracker',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <ModalProvider>
          <SubmitAlert />
          <header>
            <Hero />
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
