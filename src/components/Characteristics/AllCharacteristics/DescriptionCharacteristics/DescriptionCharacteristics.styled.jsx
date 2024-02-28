import styled from 'styled-components';

export const Background = styled.section`
  width: 100%;
  margin-bottom: 40px;
  background: #fafcff;
  border-radius: 0px 0px 8px 8px;
  // box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;

    padding: 50px 24px;
  }
`;

export const AllCharacteristicsList = styled.ul`
  width: 560px;

  @media screen and (max-width: 1439.98px) {
    margin-bottom: 40px;
  }

  //   @media screen and (min-width: 992px) {
  //     width: 456px;
  //   }
`;

export const AllCharacteristicsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const AllCharacteristicsTitle = styled.p`
  margin-bottom: 8px;

  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.greyDark};
`;

export const AllCharacteristicsValue = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};

  @media screen and (max-width: 1439.98px) {
    margin-bottom: 32px;
  }

  // @media screen and (min-width: 992px) {
  //   width: 456px;
  // }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`;
