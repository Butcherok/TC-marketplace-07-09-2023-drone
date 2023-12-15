import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100%;
  margin: 0 auto;
  dispaly: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px;

  // & .new-products ^ main {
  //   padding-right: 30px;
  // }

  @media ${props => props.theme.media.desktop} {
    min-width: 1280px;
    max-width: 1440px;
    padding: 24px;
  }
`;
