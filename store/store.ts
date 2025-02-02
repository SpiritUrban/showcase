import { configureStore } from '@reduxjs/toolkit';
import someReducer from '@/store/features/someSlice';
import paintingsSlice from '@/store/features/paintingsSlice';

export const store = configureStore({
  reducer: {
    some: someReducer,
    paintings: paintingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
