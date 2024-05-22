import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './Article.module.scss';
import { selectArticleSlice, setShowContent } from './articleSlice';
import CommentSection from '../ArticleList/CommentSection';
import { articlesDataTypes } from '../ArticleList/articleListSlice';
import { RootState } from '../../redux/store';

type ArticleProps = {
  article: articlesDataTypes;
  onAddComment: (articleId: number, comment: string) => void;
};

const Article: React.FC<ArticleProps> = ({ article, onAddComment }) => {
  const dispatch = useDispatch();
  const showContent = useSelector(
    (state: RootState) => selectArticleSlice(state)[article.id] || false,
  );

  return (
    <div className='article'>
      <h3>{article.title}</h3>
      <p>{showContent ? article.content : `${article.content.substring(0, 100)}...`}</p>
      <Button
        onClick={() => dispatch(setShowContent({ id: article.id, showContent: !showContent }))}
      >
        {showContent ? 'Скрыть' : 'Подробнее'}
      </Button>
      {showContent && (
        <CommentSection
          comments={article.comments}
          onAddComment={(comment) => onAddComment(article.id, comment)}
        />
      )}
    </div>
  );
};

export default Article;
