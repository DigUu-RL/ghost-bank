// ** TYPES
import { TSignIn } from '@/types/authentication';
import { TAccessToken } from '@/types/identity';
import { TUser } from '@/types/identity/user';

export type TAuthContext = {
  user?: TUser;
  accessToken?: TAccessToken;
  login: (signIn: TSignIn) => Promise<void>;
  logout: () => void;
};

export type TAuth = {
  user?: TUser;
  accessToken?: TAccessToken;
};
