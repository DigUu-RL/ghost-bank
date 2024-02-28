// ** TYPES
import { SetStateAction } from "react";

// ** TYPES
import { TAccessToken } from "@/types/identity";
import { TUser } from "@/types/identity/user";

export type TAuthContext = {
	user?: TUser;
	setUser?: (value: SetStateAction<TUser | undefined>) => void;
	accessToken?: TAccessToken;
	setAccessToken?: (value: SetStateAction<TAccessToken | undefined>) => void;
};

export type TAuth = {
	user?: TUser;
	accessToken?: TAccessToken;
};
