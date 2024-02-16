import { useLocation } from 'react-router-dom';

import { TitleWrapper } from './CatalogTitle.styled';
import Chevron from '../../../UI/Icon/Icon';

const CatalogTitle = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === '/';

  return (
    <TitleWrapper $isMenuOpen={isMenuOpen}>
      <h2>Каталог</h2>
      {isHomePage && <Chevron id="chevron-down" onClick={toggleMenu} />}
    </TitleWrapper>
  );
};

export default CatalogTitle;
