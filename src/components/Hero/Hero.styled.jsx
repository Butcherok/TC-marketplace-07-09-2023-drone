import styled from 'styled-components';

export const StyledHero = styled.section` 


  @media ${props => props.theme.media.desktop} {
    min-width: 1280px;
    max-width: 1440px;
    padding: 24px 0;    
  }
`;

export const HeroContainer = styled.div`
  margin: 0 auto;
  width: 100%;

  @media ${props => props.theme.media.tablet} {
    width: 100%;
  }

  @media ${props => props.theme.media.desktop} {
    width: 100%;
  }
`;
