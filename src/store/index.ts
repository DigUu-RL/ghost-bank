// ** REACT
import { configureStore } from '@reduxjs/toolkit';

// ** STORES

// ** INTEGRATION STORES
import viacep from './integration/viacep';

export const store = configureStore({
  reducer: {
    // integration
    viacep
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    });
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
