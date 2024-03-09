import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledInfoBanner = styled.section`
  width: 100%;
  border-radius: 4px;
  padding-top: 40px;
  overflow: hiddeh;
`;

export const InfoBannerContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.media.tablet} {
    flex-direction: row;
  }
`;

export const InfoBannerImg = styled.div`
  img {
    border-radius: 4px 4px 0 0;
  }

  @media ${props => props.theme.media.tablet} {
    order: 2;
    width: 52%;

    img {
      border-radius: 0 4px 4px 0;
    }
  }
`;

export const InfoBannerText = styled.div`
  padding: 16px 8px;
  background-color: ${props => props.theme.colors.logo};
  border-radius: 0 0 4px 4px;

  @media ${props => props.theme.media.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    order: 1;
    padding-left: 20px;
    width: 48%;
    border-radius: 4px 0 0 4px;
  }

  @media ${props => props.theme.media.landscapeTablet} {
    padding-left: 50px;
  }

  @media ${props => props.theme.media.desktop} {
    padding-right: 20px;
  }
`;

export const InfoBannerTitle = styled.h3`
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};
  color: ${props => props.theme.colors.background};

  @media ${props => props.theme.media.tablet} {
    font-size: ${props => props.theme.fontSizes.xxl};
  }
`;

export const InfoBannerDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};
  color: ${props => props.theme.colors.background};
  padding: 24px 0 32px;

  @media ${props => props.theme.media.tablet} {
    font-size: 16px;
  }
`;

export const BtnMore = styled(Button)`
  width: 100%;
  background-color: transparent;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};
  color: ${props => props.theme.colors.background};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.secondary};
  transition: all ease 0.6s;

  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.logo};
  }

  @media ${props => props.theme.media.tablet} {
    width: 240px;
  }
`;
