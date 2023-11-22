import styled from 'styled-components';

export const StyledBurger = styled.div`
  svg {
    width: 32px;
    height: 32px;
  }

  @media ${props => props.theme.media.desktop} {
    display: none;
  }
`;
