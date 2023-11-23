import React from 'react';
import { FooterContainer, StyledFooter } from './Footer.styled';
import FooterContent from './FooterComponents/FooterContent/FooterContent';
import FooterCopyright from './FooterComponents/FooterCopyright/FooterCopyright';
import FooterMobile from './FooterComponents/FooterMobile/FooterMobile';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterMobile />
        <FooterContent />
        <FooterCopyright/>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
