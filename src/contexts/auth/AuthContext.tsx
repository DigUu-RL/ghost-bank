'use client';

// ** REACT
import { ReactNode, createContext, useState } from "react";

// ** TYPES
import { TAccessToken } from "@/types/identity";
import { TUser } from "@/types/identity/user";
import { TAuthContext } from "@/types/contexts/auth";

// ** INTERFACES
interface IAuthProviderProps {
	children: ReactNode
}

export const AuthContext = createContext<TAuthContext>({});

export const AuthProvider = ({ children }: IAuthProviderProps) => {
	const [user, setUser] = useState<TUser | undefined>(undefined);
	const [accessToken, setAccessToken] = useState<TAccessToken | undefined>(undefined);

	return (
		<AuthContext.Provider value={{
			user,
			setUser,
			accessToken,
			setAccessToken
		}}>
			{children}
		</AuthContext.Provider>
	);
};
