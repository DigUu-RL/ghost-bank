'use client';

// ** MATERIAL UI
import { createTheme, Grid, Theme, ThemeProvider } from '@mui/material';

// ** REACT
import { ReactElement } from 'react';
import { Toaster } from 'react-hot-toast';

// ** CONTEXTS
import AppProvider from '@/contexts';

// ** INTERFACES
interface ILayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: ILayoutProps) => {
  const theme: Theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container padding={2}>
        <Toaster position='bottom-left' />
        <AppProvider>{children}</AppProvider>
      </Grid>
    </ThemeProvider>
  );
};

export default Layout;
