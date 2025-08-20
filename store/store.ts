import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import someReducer from '@/store/features/someSlice';
import paintingsSlice from '@/store/features/paintingsSlice';

const rootReducer = {
  some: someReducer,
  paintings: paintingsSlice,
};

export type RootState = {
  some: ReturnType<typeof someReducer>;
  paintings: ReturnType<typeof paintingsSlice>;
};

export const makeStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer as any,
    preloadedState,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(() => makeStore());
