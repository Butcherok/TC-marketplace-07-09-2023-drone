import React from 'react';
import { SocialsContainer, SocialsItem, SocialsList, SocialsReserved } from './Socials.styled';

const Socials = () => {
  return (
    <SocialsContainer>
      <SocialsList>
        <SocialsItem>Instagram</SocialsItem>
        <SocialsItem>Twitter </SocialsItem>
        <SocialsItem>Facebook</SocialsItem>
      </SocialsList>
      <SocialsReserved>© Quadro 2023</SocialsReserved>
    </SocialsContainer>
  );
};

export default Socials;
