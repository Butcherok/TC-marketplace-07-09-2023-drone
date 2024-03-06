import styled from 'styled-components';

export const DeliveryBackground = styled.section`
  width: 100%;
  margin-bottom: 40px;
  padding: 24px 12px;
  border-radius: ${props => props.theme.fontSizes.xxs};
  background: #fafcff;
  //   background: ${props => props.theme.colors.background};

  // box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);

  @media screen and (min-width: 1440px) {
    // width: 100%;
    padding: 50px 24px;
    margin-bottom: 40px;
    // background: #fafcff;
    border-radius: 0px 0px 8px 8px;
    // box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);
  }
`;

export const DeliveryTitle = styled.h2`
  margin-bottom: 24px;

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logo};

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const DeliveryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media screen and ${props => props.theme.media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const DeliveryItem = styled.li`
  display: flex;
  gap: 16px;

  @media screen and ${props => props.theme.media.tablet} {
    width: calc((100% - 28px) / 2);
  }
`;

export const DeliveryIcon = styled.svg`
  width: 32px;
  height: 32px;
`;

export const DeliveryMethod = styled.h3`
  margin-bottom: 12px;

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logo};
`;

export const DeliveryDescription = styled.p`
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.greyDark};
`;
