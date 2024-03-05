// ** MATERIAL UI
import { Grid } from '@mui/material';

// ** NEXT
import { Metadata } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';

// ** REACT
import { ReactNode } from 'react';

// ** AUTO
import { Inter } from 'next/font/google';
import './globals.css';

// ** CONTEXTS
import AppProvider from '@/contexts';

// ** OTHERS
import { Toaster } from 'react-hot-toast';

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
        <Grid container padding={2}>
          <Toaster />
          <AppProvider>{children}</AppProvider>
        </Grid>
      </body>
    </html>
  );
};

export default RootLayout;
