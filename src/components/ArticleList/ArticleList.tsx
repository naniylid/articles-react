import React, { ChangeEvent } from 'react';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './List.module.scss';
import Article from '../Article/Article';
import NewArticleForm from '../NewArticle/NewArticleForm';
import Statistics from '../Statistics';
import {
  selectArticleListSlice,
  setArticles,
  setSearchTerm,
  articlesDataTypes,
} from './articleListSlice';

const ArticleList: React.FC = () => {
  const dispatch = useDispatch();
  const { articles, searchTerm } = useSelector(selectArticleListSlice);

  const handleAddComment = (articleId: number, comment: string) => {
    const updatedArticles = articles.map((article) => {
      if (article.id === articleId) {
        return {
          ...article,
          comments: [...article.comments, comment],
        };
      }
      return article;
    });
    dispatch(setArticles(updatedArticles));
  };

  const handleAddArticle = (newArticle: Omit<articlesDataTypes, 'id'>) => {
    dispatch(setArticles([...articles, { ...newArticle, id: articles.length + 1 }]));
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const filteredArticles = articles.filter((article) => {
    const titleMatch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const contentMatch = article.content.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch || contentMatch;
  });

  return (
    <div className='article-list'>
      <div className='search-bar'>
        <Input
          type='text'
          placeholder='Найти статью'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {filteredArticles.map((article) => (
        <Article key={article.id} article={article} onAddComment={handleAddComment} />
      ))}
      <NewArticleForm onAddArticle={handleAddArticle} />
      <Statistics articles={articles} />
    </div>
  );
};

export default ArticleList;
