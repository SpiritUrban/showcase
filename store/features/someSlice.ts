import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SomeState {
  value: number | null;
}

const initialState: SomeState = { value: null };

const someSlice = createSlice({
  name: 'some',
  initialState,
  reducers: {
    increment: (state) => {
      state.value = (state.value ?? 0) + 1;
    },
    decrement: (state) => {
      state.value = (state.value ?? 0) - 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = someSlice.actions;
export default someSlice.reducer;
