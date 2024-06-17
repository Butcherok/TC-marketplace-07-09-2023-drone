import styled from 'styled-components';

export const BlogList = styled.ul`
  margin-bottom: 32px;
`;

export const BlogItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const BlogBackground = styled.div`
  width: 100%;
  padding: 24px;

  border-radius: 8px;
  background: #fafcff;

  box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);
`;

export const BlogImage = styled.img`
  margin-bottom: 20px;
`;

export const BlogTitle = styled.h2`
  margin-bottom: 16px;

  color: ${props => props.theme.colors.logospan};
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 120%;
`;

export const BlogText = styled.p`
  margin-bottom: 16px;

  color: ${props => props.theme.colors.logospan};
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
`;

export const BtnMore = styled.button`
  display: flex;

  color: ${props => props.theme.colors.secondary};
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 130%;
`;

export const IconMore = styled.svg`
  width: 18px;
  height: 18px;
`;
