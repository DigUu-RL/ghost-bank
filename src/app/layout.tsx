// ** NEXT
import type { Metadata } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';

// ** REACT
import { ReactNode } from 'react';

// ** AUTO
import { Inter } from 'next/font/google';
import './globals.css';

// ** CONTEXTS
import AppProvider from '@/contexts';

const inter: NextFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ghost Bank',
  description: 'O banco que faz tudo por você'
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
