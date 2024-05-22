import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../redux/store';

interface HeaderSlice {
  displayedText: string;
  index: number;
  isVisible: boolean;
}

const initialState: HeaderSlice = {
  displayedText: '',
  index: 0,
  isVisible: true,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setDisplayedText(state, action: PayloadAction<string>) {
      state.displayedText = action.payload;
    },
    setIndex(state, action: PayloadAction<number>) {
      state.index = action.payload;
    },
    setIsVisible(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },
  },
});

export const { setDisplayedText, setIndex, setIsVisible } = headerSlice.actions;
export const selectHeaderSlice = (state: RootState) => state.headerSice;

export default headerSlice.reducer;
