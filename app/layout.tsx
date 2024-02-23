import type { Metadata } from 'next';
import './globals.scss';
import { inter } from '@/utils/fonts';
import ModalProvider from '@/context/showModal';

export const metadata: Metadata = {
  title: 'Zidan Hafiz Rapiyani | Portfolio',
  description: `This is Zidan's personal portfolio website.`,
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
