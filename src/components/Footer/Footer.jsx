import React from 'react';
import { FooterContainer, StyledFooter } from './Footer.styled';
import FooterContent from './FooterComponents/FooterContent/FooterContent';
import FooterCopyright from './FooterComponents/FooterCopyright/FooterCopyright';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterContent />
        <FooterCopyright/>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
