import { TitleWrapper } from './CatalogTitle.styled';
import Chevron from '../../../UI/Icon/Icon';

const CatalogTitle = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <TitleWrapper $isMenuOpen={isMenuOpen}>
      <h2>Каталог</h2>
      <Chevron id="chevron-down" onClick={toggleMenu} />
    </TitleWrapper>
  );
};

export default CatalogTitle;
