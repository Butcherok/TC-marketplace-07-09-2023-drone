import styled from 'styled-components';

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContactsItem = styled.li``;

export const ContactsLink = styled.a`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.normal};

  color: ${props => props.theme.colors.primary};
`;
