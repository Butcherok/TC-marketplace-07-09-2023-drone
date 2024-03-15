import styled from 'styled-components';

export const StyledTopSaleSet = styled.section`
  margin-top: 40px;
  border-radius: 8px;
  overflow: hidden;
  padding: 16px 0;
  background-color: #fafcff;
  width: 100%;
`;

export const TopSaleSetContainer = styled.div`
  padding: 0 8px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.media.desktop} {
    flex-direction: row;
    justify-content: space-around;
    padding: 50px 0;

    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 50%;
    }
  }

  .seller-container {
    display: flex;

    div {
      padding-left: 16px;
    }
  }

  .prices {
    flex-direction: row-reverse;
    justify-content: start;
    align-items: baseline;
    gap: 15px;

    @media ${props => props.theme.media.tablet} {
      margin-right: 15px;
    }
  }

  @media ${props => props.theme.media.tablet} {
    .responsive-add {
      display: flex;
      column-gap: 16px;
      margin-bottom: 28px;
    }

    .buy-container {
      display: flex;

      button {
        flex: 1;
      }
    }
  }

  @media ${props => props.theme.media.desktop} {
    .responsive-add {
      flex-direction: column;
    }

    // .buy-container {
    //   margin-top: 104px;
    // }
  }
`;

export const ImgWrapper = styled.div`
  @media ${props => props.theme.media.desktop} {
    width: 40%;
  }
`;

export const SetTitle = styled.h3`
  margin: 32px 0 11px;

  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};
  color: ${props => props.theme.colors.logo};

  @media ${props => props.theme.media.desktop} {
    margin: 0;
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;
