// ** REACT
import { configureStore } from '@reduxjs/toolkit';

// ** STORES
import auth from './api/auth';

// ** INTEGRATION STORES
import viacep from './integration/viacep';

export const store = configureStore({
  reducer: {
    auth,
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
