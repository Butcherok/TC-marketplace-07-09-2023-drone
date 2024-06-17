import React from 'react';
import {
  SocialIcon,
  SocialsContainer,
  SocialsItem,
  SocialsList,
  SocialsReserved,
} from './Socials.styled';
import icon from '../../../../../assets/icons/sprite.svg';
// import { Link } from 'react-router-dom';

const Socials = () => {
  return (
    <SocialsContainer>
      <SocialsList>
        <SocialsItem>
          {/* <Link to={}> */}
          <SocialIcon>
            <use href={`${icon}#icon-instagram`}></use>
          </SocialIcon>
          {/* </Link> */}
        </SocialsItem>

        <SocialsItem>
          {/* <Link to={}> */}
          <SocialIcon>
            <use href={`${icon}#icon-x-logo`}></use>
          </SocialIcon>
          {/* </Link> */}
        </SocialsItem>

        <SocialsItem>
          {/* <Link to={}> */}
          <SocialIcon>
            <use href={`${icon}#icon-facebook`}></use>
          </SocialIcon>
          {/* </Link> */}
        </SocialsItem>
      </SocialsList>
      <SocialsReserved>© Dr.one 2023</SocialsReserved>
    </SocialsContainer>
  );
};

export default Socials;
