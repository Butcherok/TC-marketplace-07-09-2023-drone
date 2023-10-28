import React from 'react';
import { Copyright } from './FooterCopyright.styled';
import Contacts from './Contacts/Contacts';
import Socials from './Socials/Socials';

const FooterCopyright = () => {
  return (
    <Copyright>
      <Contacts />
      <Socials />
    </Copyright>
  );
};

export default FooterCopyright;
