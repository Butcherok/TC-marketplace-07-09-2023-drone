import styled from 'styled-components';

export const StyledSlider = styled.section`
  @media ${props => props.theme.media.desktop} {
    min-width: 1280px;
    max-width: 1440px;
    padding: 24px;
  }
`;

export const SliderContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;
