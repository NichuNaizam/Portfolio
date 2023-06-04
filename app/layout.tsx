import React from 'react';
import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Naizam Ali Najad',
  description: 'A personal website of Naizam Ali Najad',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
