// ** NEXT
import { NextFont } from 'next/dist/compiled/@next/font';

// ** REACT
import { ReactElement } from 'react';

// ** AUTO
import { Inter } from 'next/font/google';
import './globals.css';

const inter: NextFont = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactElement;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='pt-br'>
      <body className={inter.className}></body>
    </html>
  );
};

export default RootLayout;
