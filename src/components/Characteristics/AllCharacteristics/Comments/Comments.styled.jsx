import styled from 'styled-components';

export const Background = styled.section`
  width: 100%;
  //    border-radius: ${props => props.theme.fontSizes.xxs};
  //    background: #fafcff;

  //    box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logospan};
`;

export const ViewAllBtn = styled.button`
  margin-bottom: 24px;
  padding: 0;
  border: none;
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  background-color: transparent;
  color: ${props => props.theme.colors.greyDark};
`;
export const CommentList = styled.ul`
  margin-bottom: 24px;
`;

export const CommentItem = styled.li`
  padding: 24px;

  border-radius: 4px;
  background: #fafcff;

  box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const FlexConrainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`;

export const LogoBackground = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 143px;
  background: ${props => props.theme.colors.greyLight};
`;

export const Logo = styled.svg`
  display: block;
  width: 20px;
  height: 20px;
  //   stroke-width: 2.5px;
  stroke: ${props => props.theme.colors.background};
`;

export const UserName = styled.h3`
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};
`;

export const StarList = styled.ul`
  display: flex;
`;

export const StarItem = styled.li``;

export const Star = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${props => props.theme.colors.yellow};
`;

export const CommentResponse = styled.button`
  margin-bottom: 12px;
  border: none;
  padding: 0;
  background-color: transparent;
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  text-decoration-line: underline;
  color: ${props => props.theme.colors.btnColor};
`;

export const CommentText = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};
`;

export const DetailBtn = styled.button`
  dispay: inline-block;
  border: none;
  padding: 0;
  background-color: transparent;
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  text-decoration-line: underline;
  color: ${props => props.theme.colors.greyDark};
`;

export const AddCommentBtn = styled.button`
  border: none;

  width: 164px;
  height: 40px;
  padding: 10px 20px;

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};

  border-radius: 4px;
  background-color: ${props => props.theme.colors.btnColor};
  color: ${props => props.theme.colors.background};
`;
