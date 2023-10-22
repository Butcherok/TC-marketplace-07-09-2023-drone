import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;

  @media ${(props) => props.theme.media.tablet} {
    width: 768px;
    padding: 24px 32px 0;
  }

  @media ${(props) => props.theme.media.desktop} {
    width: 1280px;
    padding: 24px;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;