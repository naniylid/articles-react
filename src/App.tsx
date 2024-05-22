import './assets/App.scss';
import Header from './components/Header/Header';
import ArticleList from './components/ArticleList/ArticleList';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <ArticleList />
    </div>
  );
};

export default App;
