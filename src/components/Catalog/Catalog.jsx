import { useEffect, useState } from 'react';


import { CatalogContainer, StyledCatalog } from './Catalog.styled';
import CatalogTitle from './CatalogComponents/CatalogTitle/CatalogTitle';
import CatalogMenu from './CatalogComponents/CatalogMenu/CatalogMenu';

const Catalog = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  

  return (
    <StyledCatalog>
      <CatalogContainer>
        <CatalogTitle setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <CatalogMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </CatalogContainer>
    </StyledCatalog>
  );
};

export default Catalog;
