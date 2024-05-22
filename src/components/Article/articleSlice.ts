import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../redux/store';

type ArticleState = {
  [id: number]: boolean;
};

const initialState: ArticleState = {};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setShowContent(state, action: PayloadAction<{ id: number; showContent: boolean }>) {
      state[action.payload.id] = action.payload.showContent;
    },
  },
});

export const { setShowContent } = articleSlice.actions;
export const selectArticleSlice = (state: RootState) => state.articleSlice;

export default articleSlice.reducer;
