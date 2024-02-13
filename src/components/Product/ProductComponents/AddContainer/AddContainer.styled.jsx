import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 36px;
`;

export const AddToComparingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const FavoriteIcon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: ${props => props.theme.colors.greyDark};
  fill: transparent;
  transition: fill 0.2s ease-out, stroke 0.2s ease-out;
`;

export const AddToFavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:hover ${FavoriteIcon} {
    fill: ${props => props.theme.colors.red};
    stroke: ${props => props.theme.colors.red};
  }
`;

export const CompareIcon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: ${props => props.theme.colors.greyDark};
  cursor: pointer;
`;

export const AddText = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.greyDark};
`;
