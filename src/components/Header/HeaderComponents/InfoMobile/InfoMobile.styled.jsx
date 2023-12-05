import styled from 'styled-components';

export const StyledInfoMobile = styled.div`
  padding: 10.5px 8px;
  width: 100%;
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.title};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.logo};
`;
