'use client';

// ** REACT
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

// ** CONTEXTS
import { AuthProvider } from './auth/AuthContext';

// ** STORES
import { store } from '../store';

interface IAppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProviderProps) => {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
};

export default AppProvider;
