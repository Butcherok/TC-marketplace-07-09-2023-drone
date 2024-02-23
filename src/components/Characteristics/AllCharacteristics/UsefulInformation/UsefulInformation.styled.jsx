import styled from 'styled-components';

export const Background = styled.section`
  width: 100%;
  margin-bottom: 32px;
  padding: 24px 12px;
  border-radius: ${props => props.theme.fontSizes.xxs};
  background: #fafcff;

  box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logospan};

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 62px;
  }
`;

export const File = styled.div`
  position: relative;

  width: 196px;
  height: 196px;
  background-color: #fbe598;
`;

export const FileTitleBlock = styled.div`
  position: absolute;
  bottom: 0;

  width: 196px;
  height: 41px;
  padding: 10px;
  background-color: ${props => props.theme.colors.greyDark};
`;

export const FileTitle = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.greyLight};
  text-align: center;
`;
