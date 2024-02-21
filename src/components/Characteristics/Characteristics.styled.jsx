import styled from 'styled-components';

export const CharacteristicsBackground = styled.section`
  width: 100%;
  margin-bottom: 40px;
  padding: 24px 12px;
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.fontSizes.xxs};
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logospan};
`;

export const CharacteristicsList = styled.ul`
  margin-bottom: 24px;
`;

export const CharacteristicsItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
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

  color: ${props => props.theme.colors.logospan};
`;

export const Description = styled.p`
  margin-bottom: 24px;
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};
`;

export const BtnMore = styled.button`
  width: 100%;
  height: 40px;
  padding: 10px 10px 10px 20px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.greyLight};

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};
  background-color: transparent;
`;
