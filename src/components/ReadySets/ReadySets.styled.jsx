import styled from 'styled-components';

export const StyledReadySets = styled.section`
  width: 100%;
  padding: 40px 0 0;
`;

export const ReadySetsContainer = styled.div`
  margin: 0 auto;

  & .slick-track {
    display: flex;
    gap: 8px;

    @media ${props => props.theme.desktop} {
      gap: 20px;
    }
  }

  & .slider {
    width: calc(100% + 16px);
  }
`;

export const ReadySetsTitle = styled.h2`
  font-size: 20px;
  line-height: ${props => props.theme.lineHeights.section};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 8px;
`;
