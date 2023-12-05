import styled from 'styled-components';

export const StyledBurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: absolute;
  top: 0;
  left: ${props => (props.isOpen ? '0' : '-100vw')};
  padding: 24px 16px;
  width: 94%;
  background-color: ${props => props.theme.colors.background};
  z-index: 999;
  transition: left 0.8s ease;

  @media ${props => props.theme.media.desktop} {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); // Сірий колір оверлею
  display: ${props => (props.isOpen ? 'block' : 'none')};
  z-index: 998;

  @media ${props => props.theme.media.desktop} {
    display: none;
  }
`;
