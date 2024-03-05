// ** REACT
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// ** AXIOS
import axios, { AxiosResponse } from 'axios';

// ** TYPES
import { TGet } from '@/types/api';

export const viacep = createAsyncThunk('api/ViaCep', async (args: TGet, { rejectWithValue }) => {
  try {
    const url: string = `https://viacep.com.br/ws/${args.id}/json/`;

    const response: AxiosResponse<any, any> = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const viacepSlice = createSlice({
  name: 'apiAuth',
  initialState: {},
  reducers: {},
  extraReducers: builder => {}
});

export const {} = viacepSlice.actions;

export default viacepSlice.reducer;
