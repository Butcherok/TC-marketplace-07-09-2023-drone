import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #FAFCFF;
  box-shadow: ${props => props.theme.shadow.normal};
  position: relative;
  z-index: 200;
  height: 64px;

  @media ${props => props.theme.media.tablet} {
    // padding: 24px 0;
  }

  @media ${props => props.theme.media.desktop} {
    min-width: 1280px;
    max-width: 1440px;
    padding: 16px 64px;
    background-color: ${props => props.theme.colors.background};
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  min-width: 280px;
  padding: 0 20px;
  height: 100%;
`;
