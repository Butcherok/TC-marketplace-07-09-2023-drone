import styled from 'styled-components';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export const StyledPresentation = styled.div`
  display: none;

  @media ${props => props.theme.media.tablet} {
    display: flex;
  }
`;

export const RadioGroupPresentation = styled(ToggleButtonGroup)`
  display: flex;
  align-items: center;
  height: 38px;

  .btn:hover,
  .btn:active {
    background-color: transparent;
    border-color: transparent;
  }

  .btn {
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
  }

  .btn.active {
    background-color: transparent !important;
  }

  .active svg {
    stroke: #7b7b89;
    fill: #7b7b89;
  }
`;

export const RadioButtonPresentation = styled(ToggleButton)`
  background-color: transparent !important;
  border-color: transparent !important;
  padding: 0;
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
    fill: #dbdce6;
    margin: 0;
  }
`;
