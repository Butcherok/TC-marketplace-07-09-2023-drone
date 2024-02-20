import {
  BreadcrumbsStyled,
  BreadcrumbsContainer,
  Link,
} from './Breadcrumbs.styled';
import Right from '../Icon/Icon';

const Breadcrumbs = ({ currentPage }) => {
  return (
    <BreadcrumbsStyled>
      <BreadcrumbsContainer>
        <Link to="/">Головна сторінка</Link>
        <Right id="chevron-right" />
        <span>{currentPage}</span>
      </BreadcrumbsContainer>
    </BreadcrumbsStyled>
  );
};

export default Breadcrumbs;
