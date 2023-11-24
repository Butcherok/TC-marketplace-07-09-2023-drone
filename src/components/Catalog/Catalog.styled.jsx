import styled from 'styled-components';

export const StyledCatalog = styled.section`
  width: 100%;
  padding-top: 40px;
`;

export const CatalogContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;

  @media ${props => props.theme.media.desktop} {
    padding: 0;
`;
