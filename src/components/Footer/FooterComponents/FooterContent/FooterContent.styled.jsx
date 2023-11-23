import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const FooterContentStyled = styled.div`
  display: none;
  @media ${props => props.theme.media.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 48px;
  }
`;

export const Btn = styled(Button)`
  font-size: ${props => props.theme.fontSizes.xs};
  padding: 12px 16px;
`;
