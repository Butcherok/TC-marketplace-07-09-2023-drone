import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  margin: 0 auto;

  @media ${props => props.theme.media.tablet} {
  }

  @media ${props => props.theme.media.desktop} {
    min-width: 1280px;
    max-width: 1440px;
  }
`;

export const FooterContainer = styled.div`

@media ${props => props.theme.media.desktop} {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 60px 80px;
  width: 100%;

  .footer-btn {
    background-color: #0052CC;
    transition: background-color .6s ease;

    &:hover {
      background-color: #3385FF;
      border-color: transparent;
    }
    &:active {
      background-color: #1656B6;
      border-color: transparent;
  }
}
`;
// 132
