// ** REACT
import { useContext } from 'react';

// ** CONTEXTS
import { AuthContext } from '@/contexts/auth/AuthContext';

// ** TYPES
import { TAuth, TAuthContext } from '@/types/contexts/auth';

export const useAuth = (): TAuth => {
  const authContext: TAuthContext = useContext(AuthContext);

  return {
    user: authContext.user,
    accessToken: authContext.accessToken
  };
};
