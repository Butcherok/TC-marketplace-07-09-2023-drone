import styled from 'styled-components';

export const ArticleBackground = styled.div`
  padding: 48px 12px;

  border-radius: 8px;
  background: #fafcff;
  box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);

  @media screen and (min-width: 1440px) {
    padding: 48px 108px;
  }
`;

export const ArticleTitle = styled.h2`
  margin-bottom: 20px;

  color: #1d1f36;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 120%;

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;

    font-size: 48px;
  }
`;

export const ArticleImg = styled.img`
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const ArticleTextItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const ArticleSubTitle = styled.h3`
  margin-bottom: 16px;

  color: #1d1f36;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 120%;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const ArticleText = styled.p`
  color: #1d1f36;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;
