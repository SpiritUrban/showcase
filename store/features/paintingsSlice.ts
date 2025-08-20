import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Painting } from '@/interfaces/painting';

interface PaintingState {
  list: Painting[];
  selectedPainting: Painting | null;
}

const initialState: PaintingState = {
  list: [],
  selectedPainting: null,
};

const paintingsSlice = createSlice({
  name: 'paintings',
  initialState,
  reducers: {
    setPaintings: (state, action: PayloadAction<Painting[]>) => {
      state.list = action.payload;
    },
    setSelectedPainting: (state, action: PayloadAction<Painting | null>) => {
      state.selectedPainting = action.payload;
    },
  },
});

export const { setPaintings, setSelectedPainting } = paintingsSlice.actions;
export { paintingsSlice };
export default paintingsSlice.reducer;
