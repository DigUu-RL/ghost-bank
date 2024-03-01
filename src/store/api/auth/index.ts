// ** REACT
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// ** AXIOS
import axios, { AxiosResponse } from 'axios';

// ** TYPES
import { TSignIn } from '@/types/authentication';
import { TGet } from '@/types/api';
import { TUser } from '@/types/identity/user';
import { TAccessToken } from '@/types/identity';

const apiUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export const signIn = createAsyncThunk('apiAuth/signIn', async (args: TSignIn, { rejectWithValue }) => {
  try {
    const url: string = `${apiUrl}/authentication/signin`;
    const response: AxiosResponse<TAccessToken, any> = await axios.post(url, args);

    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const me = createAsyncThunk('apiAuth/me', async (args: TGet, { rejectWithValue }) => {
  try {
    const url: string = `${apiUrl}/authentication/me`;

    const response: AxiosResponse<TUser, any> = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${args.accessToken}`,
        'Content-Type': 'application/json',
        'x-version': '1.0'
      }
    });

    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const authSlice = createSlice({
  name: 'apiAuth',
  initialState: {},
  reducers: {},
  extraReducers: builder => {}
});

export const {} = authSlice.actions;

export default authSlice.reducer;
