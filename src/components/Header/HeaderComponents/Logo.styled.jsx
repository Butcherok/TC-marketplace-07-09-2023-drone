import styled from "styled-components";

const StyledLogo = styled.img`
  display: inline-block;
  width: 140px;
  height: 40px;

  @media ${(props) => props.theme.media.tablet} {
    width: 140px;
    height: 40px;
  }
`;

export default StyledLogo;