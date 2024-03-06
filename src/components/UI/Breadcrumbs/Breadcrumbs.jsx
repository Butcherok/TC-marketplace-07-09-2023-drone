import {
  BreadcrumbsStyled,
  BreadcrumbsContainer,
  Link,
} from './Breadcrumbs.styled';
import Right from '../Icon/Icon';

const Breadcrumbs = ({ currentPage, currentProduct }) => {
  return (
    <BreadcrumbsStyled>
      <BreadcrumbsContainer>
        <Link to="/">Головна сторінка</Link>
        <Right id="chevron-right" />
        {currentPage && <span>{currentPage}</span>}
        {/* {currentProduct && <Right id="chevron-right" /> && (
          <span>{currentPage}</span>
        )} */}
      </BreadcrumbsContainer>
    </BreadcrumbsStyled>
  );
};

export default Breadcrumbs;
