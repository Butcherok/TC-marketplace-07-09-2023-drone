import styled from "styled-components";

export const StyledFilterOptions = styled.aside`
  display: none;

  @media ${props => props.theme.media.tablet} {
    display: flex;
    flex-direction: column;
    flex: 0 0 167px;
    padding: 8px 0 8px 8px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    height: fit-content;
  }
`;