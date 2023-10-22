import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.background};

  @media ${props => props.theme.media.tablet} {
    padding: 24px;
  }

  @media ${props => props.theme.media.desktop} {
    min-width: 1280px;
    max-width: 1440px;
    padding: 24px;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;
