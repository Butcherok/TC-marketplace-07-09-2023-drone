import { BreadcrumbsStyled, BreadcrumbsContainer, Link } from './Breadcrumbs.styled';
import Right from '../Icon/Icon';

const Breadcrumbs = () => {
  return (
    <BreadcrumbsStyled>
      <BreadcrumbsContainer>
        <Link to='/'>Головна сторінка</Link>
        <Right id="chevron-right" />
        <span>Дрони</span>
      </BreadcrumbsContainer>
    </BreadcrumbsStyled>
  );
};

export default Breadcrumbs;
