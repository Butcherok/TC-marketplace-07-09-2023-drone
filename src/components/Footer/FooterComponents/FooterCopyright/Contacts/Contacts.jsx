import React from 'react';
import {
  ContactsContainer,
  ContactsItem,
  ContactsLink,
  ContactsList,
} from './Contacts.styled';

const Contacts = () => {
  return (
    <ContactsContainer>
      <ContactsList>
        <ContactsItem>
          <ContactsLink href="mailto:poshta@gmail.com">
            poshta@gmail.com
          </ContactsLink>
        </ContactsItem>
        <ContactsItem>
          <ContactsLink href="tel:+3808007465388">0 800 746 53 88</ContactsLink>
        </ContactsItem>
      </ContactsList>
    </ContactsContainer>
  );
};

export default Contacts;
