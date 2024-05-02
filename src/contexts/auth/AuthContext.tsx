'use client';

// ** REACT
import { ReactNode, createContext, useState } from 'react';

// ** AXIOS
import axios, { AxiosResponse } from 'axios';

// ** NEXT
import { useRouter } from 'next/navigation';

// ** TYPES
import { TAccessToken } from '@/types/identity';
import { TUser } from '@/types/identity/user';
import { TAuthContext } from '@/types/contexts/auth';
import { TSignIn } from '@/types/authentication';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

// ** INTERFACES
interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<TAuthContext>({
  login: async (_: TSignIn) => {
    throw new Error('Not implemented');
  },
  logout: () => {
    throw new Error('Not implemented');
  }
});

export const AuthProvider = ({ children }: IAuthProviderProps): JSX.Element => {
  // * hooks
  const { push }: AppRouterInstance = useRouter();

  // * states
  const [user, setUser] = useState<TUser | undefined>(undefined);
  const [accessToken, setAccessToken] = useState<TAccessToken | undefined>(undefined);

  // * variables
  const apiUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
  const tokenKey: string | undefined = process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY;

  // * handles
  const login = async (signIn: TSignIn): Promise<void> => {
    const tokenResponse: AxiosResponse<TAccessToken, any> = await axios.post(`${apiUrl}/authentication/signin`, signIn);

    const userResponse: AxiosResponse<TUser, any> = await axios.get(`${apiUrl}/authentication/me`, {
      headers: {
        Authorization: `Bearer ${tokenResponse.data}`,
        'Content-Type': 'application/json',
        'x-version': '1.0'
      }
    });

    const token: TAccessToken = tokenResponse.data;
    const user: TUser = userResponse.data;

    localStorage.setItem(`${tokenKey}`, JSON.stringify(token));

    setAccessToken(token);
    setUser(user);

    push('/home');
  };

  const logout = (): void => {
    localStorage.removeItem(`${tokenKey}`);

    setAccessToken(undefined);
    setUser(undefined);

    push('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
