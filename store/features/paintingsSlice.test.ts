import { paintingsSlice, setPaintings, setSelectedPainting } from './paintingsSlice';
import { Painting } from '@/interfaces/painting';

describe('paintingsSlice', () => {
  it('should return the initial state', () => {
    expect(paintingsSlice.reducer(undefined, { type: 'unknown' })).toEqual({
      list: [],
      selectedPainting: null,
    });
  });

  it('should handle setPaintings', () => {
    const paintings: Painting[] = [
      {
        title: 'Mona Lisa',
        img: 'mona.jpg',
        description: 'A portrait',
        price: 1000,
        sizeX: 20,
        sizeY: 30,
      },
    ];
    const state = paintingsSlice.reducer(undefined, setPaintings(paintings));
    expect(state.list).toEqual(paintings);
  });

  it('should handle setSelectedPainting', () => {
    const painting: Painting = {
      title: 'Starry Night',
      img: 'starry.jpg',
      description: 'A night sky',
      price: 2000,
      sizeX: 40,
      sizeY: 50,
    };
    const state = paintingsSlice.reducer(undefined, setSelectedPainting(painting));
    expect(state.selectedPainting).toEqual(painting);
    const cleared = paintingsSlice.reducer(state, setSelectedPainting(null));
    expect(cleared.selectedPainting).toBeNull();
  });
});
