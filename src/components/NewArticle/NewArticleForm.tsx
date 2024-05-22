import React, { FormEvent } from 'react';
import { Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './NewArticle.module.scss';
import { selectNewArticleSlice, setTitle, setContent } from './NewArticleSlice';

const { TextArea } = Input;

type NewArticleFormProps = {
  onAddArticle: (newArticle: { title: string; content: string; comments: string[] }) => void;
};

const NewArticleForm: React.FC<NewArticleFormProps> = ({ onAddArticle }) => {
  const dispatch = useDispatch();
  const { title, content } = useSelector(selectNewArticleSlice);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Проверяем, что оба поля заполнены
    if (title.trim() !== '' && content.trim() !== '') {
      onAddArticle({ title, content, comments: [] });
      dispatch(setTitle(''));
      dispatch(setContent(''));
    } else {
      alert('Заполните оба поля перед добавлением статьи.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='new-article-form'>
      <h2>Добавить новую статью</h2>
      <TextArea
        placeholder='Заголовок'
        value={title}
        onChange={(e) => dispatch(setTitle(e.target.value))}
        autoSize
      />
      <TextArea
        placeholder='Текст статьи'
        value={content}
        onChange={(e) => dispatch(setContent(e.target.value))}
      />
      <Button htmlType='submit'>Добавить статью</Button>
    </form>
  );
};

export default NewArticleForm;
