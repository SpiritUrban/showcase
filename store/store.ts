import { configureStore } from '@reduxjs/toolkit';
import someReducer from '@/store/features/someSlice';

export const store = configureStore({
  reducer: {
    some: someReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
