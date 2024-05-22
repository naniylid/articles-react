import React from 'react';
import { articlesDataTypes } from './ArticleList/articleListSlice';

type StatisticsProps = {
  articles: articlesDataTypes[];
};

const Statistics: React.FC<StatisticsProps> = ({ articles }) => {
  const totalArticles = articles.length;
  const totalCharacters = articles.reduce((sum, article) => sum + article.content.length, 0);
  const totalComments = articles.reduce((sum, article) => sum + article.comments.length, 0);

  return (
    <div className='statistics'>
      <h1>Статистика</h1>
      <table>
        <tbody>
          <tr>
            <td>Количество статей:</td>
            <td>{totalArticles}</td>
          </tr>
          <tr>
            <td>Общее количество символов:</td>
            <td>{totalCharacters}</td>
          </tr>
          <tr>
            <td>Количество комментариев:</td>
            <td>{totalComments}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
