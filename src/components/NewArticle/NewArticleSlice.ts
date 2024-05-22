import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

type NewArticleType = {
  title: string;
  content: string;
};

const initialState: NewArticleType = {
  title: '',
  content: '',
};

const newArticleSlice = createSlice({
  name: 'newArticle',
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setContent(state, action: PayloadAction<string>) {
      state.content = action.payload;
    },
  },
});

export const { setTitle, setContent } = newArticleSlice.actions;
export const selectNewArticleSlice = (state: RootState) => state.newArticleSlice;

export default newArticleSlice.reducer;
