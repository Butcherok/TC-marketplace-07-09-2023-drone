import styled from 'styled-components';

export const CharacteristicsBackground = styled.section`
  width: 100%;
  padding: 24px 12px;
  margin-bottom: 40px;
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.fontSizes.xxs};

  @media screen and (min-width: 1440px) {
    padding: 50px 24px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logospan};

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const CharacteristicsList = styled.ul`
  @media screen and (max-width: 991.98px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 992px) {
    width: 456px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`;

export const CharacteristicsItem = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const CharacteristicsTitle = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.greyDark};
`;

export const CharacteristicsValue = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};
  text-align: end;

  color: ${props => props.theme.colors.logospan};
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};

  @media screen and (max-width: 991.98px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 992px) {
    width: 456px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`;

export const BtnMore = styled.button`
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.secondary};

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 416px;
    display: block;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const FlexWrapper = styled.div`
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 992px) and (max-width: 1439.98px) {
    margin-bottom: 24px;
  }
`;
