import ArticleList from 'components/Articles/ArticleList/ArticleList';
import FindInput from 'components/Articles/FindInput/FindInput';
import Pagination from 'components/Articles/Pagination/Pagination';
import Breadcrumbs from 'components/UI/Breadcrumbs/Breadcrumbs';

const ArticlesPage = () => {
  return (
    <>
      <Breadcrumbs style={{ marginBottom: '16px' }} />
      <FindInput />
      <ArticleList />
      <Pagination />
    </>
  );
};

export default ArticlesPage;
