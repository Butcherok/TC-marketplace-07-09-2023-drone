import styled from 'styled-components';

export const StyledFilterAccordion = styled.div`
  width: 100%;
`;

export const StyledFilterAccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 10px 13px 0;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};
  color: ${props => props.theme.colors.logospan};

  & svg {
    width: 18px;
    height: 18px;
    stroke: ${props => props.theme.colors.logospan};
    cursor: pointer;
    transition: transform 0.3s ease;
    transform: ${props =>
      props.$isAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const StyledFilterAccordionBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterAccordionItem = styled.label`
  input {
    margin: 0 10px;
  }

  span {
    font-size: ${props => props.theme.fontSizes.s};
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: ${props => props.theme.lineHeights.title};
    color: #7b7b89;
  }
`;
