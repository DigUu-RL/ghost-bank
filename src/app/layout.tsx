'use client';

// ** MATERIAL UI
import { Grid, Theme, ThemeProvider, createTheme } from '@mui/material';

// ** NEXT
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

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const theme: Theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Grid container padding={2}>
            <Toaster position='bottom-left' />
            <AppProvider>{children}</AppProvider>
          </Grid>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
