import styled from 'styled-components';

export const OtherProductsSection = styled.section`
  width: 100%;
  // padding: 40px 0 0;
`;

export const ConsideredContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;

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

export const SellerProductsContainer = styled.div`
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
export const Title = styled.h2`
  font-size: 20px;
  line-height: ${props => props.theme.lineHeights.section};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 24px;
`;
