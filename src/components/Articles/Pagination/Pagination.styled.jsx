import styled from 'styled-components';

export const Background = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  gap: 4px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 56px;
  }
`;

export const Arrow = styled.svg`
  width: 24px;
  height: 24px;

  stroke: #1d1f36;
  background-color: #fafcff;
`;

export const NumberList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const NumberItem = styled.li`
  width: 24px;
  height: 24px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  text-align: center;

  &:first-child {
    border-radius: 4px;
    background: var(--Primary-light, #fafcff);

    box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);

    color: var(--Primary-active, #314eb6);
  }
`;
