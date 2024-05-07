// ** NEXT
import { NextFont } from 'next/dist/compiled/@next/font';

// ** REACT
import { ReactElement } from 'react';

// ** AUTO
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/layout';

const inter: NextFont = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactElement;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
