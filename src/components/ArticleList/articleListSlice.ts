import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import articlesData from '../../data/articles';

export type articlesDataTypes = {
  id: number;
  title: string;
  content: string;
  comments: string[];
};

type ArticleListType = {
  articles: articlesDataTypes[];
  searchTerm: string;
  comment: string;
};

const initialState: ArticleListType = {
  articles: articlesData,
  searchTerm: '',
  comment: '',
};

const articleListSlice = createSlice({
  name: 'articleList',
  initialState,
  reducers: {
    setArticles(state, action: PayloadAction<articlesDataTypes[]>) {
      state.articles = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setComment(state, action: PayloadAction<string>) {
      state.comment = action.payload;
    },
  },
});

export const { setArticles, setComment, setSearchTerm } = articleListSlice.actions;
export const selectArticleListSlice = (state: RootState) => state.articleListSlice;

export default articleListSlice.reducer;
