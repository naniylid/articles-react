import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Header.module.scss';
import { selectHeaderSlice, setIndex, setDisplayedText, setIsVisible } from './HeaderSice';

const Header: React.FC = () => {
  const text = 'Блог о растениях';
  const dispatch = useDispatch();
  const { displayedText, index, isVisible } = useSelector(selectHeaderSlice);

  useEffect(() => {
    const handleScroll = () => {
      // Проверяем, виден ли компонент на экране
      const headerElement = document.querySelector('.header');
      if (headerElement) {
        const headerRect = headerElement.getBoundingClientRect();
        const isVisible = headerRect.top >= 0 && headerRect.bottom <= window.innerHeight;
        dispatch(setIsVisible(isVisible));
      }
    };

    // Добавляем обработчик события скроллинга
    window.addEventListener('scroll', handleScroll);

    // Очищаем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let interval: number | null = null;

    if (isVisible) {
      interval = setInterval(() => {
        const nextChar = text[index];

        const newText = displayedText + nextChar;
        dispatch(setDisplayedText(newText));
        dispatch(setIndex(index + 1));

        if (index === text.length) {
          // Если достигли конца текста, сбрасываем индекс и отображаемый текст
          dispatch(setIndex(0));
          dispatch(setDisplayedText(''));
        }
      }, 200);
    } else {
      // Если компонент стал невидимым, очищаем интервал
      if (interval) {
        clearInterval(interval);
      }
    }

    // Очищаем интервал при размонтировании компонента
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [dispatch, displayedText, index, isVisible, text]);

  return (
    <header className='header'>
      <h1>{displayedText}</h1>
    </header>
  );
};

export default Header;
