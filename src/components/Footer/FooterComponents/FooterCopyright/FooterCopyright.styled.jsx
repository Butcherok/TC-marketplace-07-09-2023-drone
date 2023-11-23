import styled from 'styled-components';

export const Copyright = styled.div`
  display: none;

  @media ${props => props.theme.media.desktop} {
    display: flex;
    justify-content: end;
    align-items: start;
    gap: 64px;
  }
`;
// 123
