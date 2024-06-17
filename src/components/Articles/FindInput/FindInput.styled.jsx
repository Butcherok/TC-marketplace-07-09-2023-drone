import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 36px;
  padding: 0px 12px;
  padding-right: 44px;
  border: 1px solid ${props => props.theme.colors.secondary};

  color: ${props => props.theme.colors.secondary};
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: calc(16 / 12);

  border-radius: 8px;
  box-shadow: 3px 1px 40px 0px rgba(187, 194, 221, 0.1);

  &::placeholder {
    color: ${props => props.theme.colors.secondary};
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: calc(16 / 12);
  }
`;

export const InputContainer = styled.div`
  position: relative;

  width: 100%;
  margin-bottom: 16px;
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`;

export const IconSearch = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${props => props.theme.colors.secondary};
`;
