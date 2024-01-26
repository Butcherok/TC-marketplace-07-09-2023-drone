import styled from 'styled-components';

export const StyledSelectedFilters = styled.div`
  display: none;

  @media ${props => props.theme.media.tablet} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex: 1;
    gap: 12px;

    .selected-filter {
      display: flex;
      align-items: center;
      padding: 6px 16px;
      border-radius: 20px;
      border: 1px solid var(--Grey-low, #dbdce6);
      box-shadow: 3px 4px 40px 0px #dbdce6;
      font-size: ${props => props.theme.fontSizes.s};
      font-weight: ${props => props.theme.fontWeights.normal};
      line-height: ${props => props.theme.lineHeights.title};
      color: ${props => props.theme.colors.logospan};
    }

    svg {
      width: 18px;
      height: 18px;
      stroke: ${props => props.theme.colors.logospan};
      stroke-width: 1.5px;
      margin: 0 0 0 8px;
      cursor: pointer;
    }
  }
`;

export const SelectedFilter = styled.div``;


