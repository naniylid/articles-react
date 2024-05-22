import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { selectArticleListSlice, setComment } from './articleListSlice';

const { TextArea } = Input;

type CommentSectionProps = {
  comments: string[];
  onAddComment: (comment: string) => void;
};

const CommentSection: React.FC<CommentSectionProps> = ({ comments, onAddComment }) => {
  const dispatch = useDispatch();
  const { comment } = useSelector(selectArticleListSlice);

  const handleAddComment = () => {
    onAddComment(comment);
    dispatch(setComment(''));
  };

  return (
    <div className='comment-section'>
      <h2>Комментарии</h2>
      {comments.map((comment, index) => (
        <div className='comment-content'>
          <Avatar icon={<UserOutlined />} />
          <p key={index}>{comment}</p>
        </div>
      ))}
      <TextArea
        value={comment}
        onChange={(e) => dispatch(setComment(e.target.value))}
        placeholder='Добавьте комментарий'
      ></TextArea>
      <Button onClick={handleAddComment}>Добавить комментарий</Button>
    </div>
  );
};

export default CommentSection;
