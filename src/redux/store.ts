import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import articleSlice from '../components/Article/articleSlice';
import articleListSlice from '../components/ArticleList/articleListSlice';
import newArticleSlice from '../components/NewArticle/NewArticleSlice';
import headerSice from '../components/Header/HeaderSice';

export const store = configureStore({
  reducer: {
    headerSice,
    articleSlice,
    articleListSlice,
    newArticleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
