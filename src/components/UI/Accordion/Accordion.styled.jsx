import styled from 'styled-components';
import { NavLink } from 'react-router-dom';;

export const StyledAccordion = styled.div``;

export const StyledAccordionHeader = styled.div`
  padding: 0;
  margin-bottom: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent !important;
  border: none !important;
  font-weight: ${props =>
    props.isAccordionOpen
      ? props.theme.fontWeights.bold
      : props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.logo} !important;

  & svg {
    width: 24px;
    height: 24px;
    stroke: ${props => props.theme.colors.logo};
    cursor: pointer;
    transition: transform 0.3s ease;
    transform: ${props =>
      props.isAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const StyledAccordionBody = styled.div`
  display: flex;
  flex-direction: column;

  & svg {
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.logo};
  }

  & .accordion-item {
    display: flex;
    justify-content: flex-start;
    gap: 12px;
    padding: 10px;
  }
`;

export const AccordionLink = styled(NavLink)`

`;