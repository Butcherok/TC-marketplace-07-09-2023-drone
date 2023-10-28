import React from 'react';
import { ContactsContainer, ContactsItem, ContactsList } from './Contacts.styled';

const Contacts = () => {
  return (
    <ContactsContainer>
      <ContactsList>
        <ContactsItem>
          <a href="mailto:poshta@gmail.com">poshta@gmail.com</a>
        </ContactsItem>
        <ContactsItem>
          <a href="tel:++380961111111">0 800 746 53 88</a>
        </ContactsItem>
      </ContactsList>
    </ContactsContainer>
  );
};

export default Contacts;
