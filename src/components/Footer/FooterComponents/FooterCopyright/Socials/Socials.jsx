import React from 'react';
import {
  LogoSocial,
  SocialsContainer,
  SocialsItem,
  SocialsList,
  SocialsReserved,
} from './Socials.styled';
import instagram from '../../../../../assets/icons/Social/instagram.svg';
import tweeter from '../../../../../assets/icons/Social/twitter.svg';
import facebook from '../../../../../assets/icons/Social/facebook.svg';

const Socials = () => {
  return (
    <SocialsContainer>
      <SocialsList>
        <SocialsItem>
          <LogoSocial src={instagram} alt="instagram" />
        </SocialsItem>
        <SocialsItem>
          {' '}
          <LogoSocial src={tweeter} alt="instagram" />
        </SocialsItem>
        <SocialsItem>
          {' '}
          <LogoSocial src={facebook} alt="instagram" />
        </SocialsItem>
      </SocialsList>
      <SocialsReserved>© Quadro 2023</SocialsReserved>
    </SocialsContainer>
  );
};

export default Socials;
