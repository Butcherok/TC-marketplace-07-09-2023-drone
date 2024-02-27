import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryList = styled.ul`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1439.98px) {
    display: none;
  }
`;

export const CategoryItem = styled.li`
  // padding: 10px 24px;
  // border-radius: 4px 4px 0px 0px;

  // font-family: ${props => props.theme.fonts.main};
  // font-size: ${props => props.theme.fontSizes.m};
  // font-weight: ${props => props.theme.fontWeights.normal};
  // line-height: ${props => props.theme.lineHeights.title};

  // color: ${props => props.theme.colors.greyDark};

  // box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);

  // &.is-active {
  //   background-color: #fafcff;
  // }

  cursor: pointer;
`;

export const Category = styled(Link)`
  padding: 10px 24px;
  border-radius: 4px 4px 0px 0px;

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.greyDark};

  box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);

  &.active {
    background-color: #fafcff;
  }
`;

export const CharacteristicsBackground = styled.section`
  width: 100%;
  padding: 24px 12px;
  margin-bottom: 40px;
  background: #fafcff;
  border-radius: ${props => props.theme.fontSizes.xxs};
  // box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);

  @media screen and (min-width: 1440px) {
    padding: 50px 24px;
    border-radius: 0px 0px 8px 8px;

    display: none;
  }
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

export const CharacteristicsList = styled.ul`
  @media screen and (max-width: 991.98px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 992px) {
    width: 456px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`;

export const CharacteristicsItem = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const CharacteristicsTitle = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.greyDark};
`;

export const CharacteristicsValue = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};
  text-align: end;

  color: ${props => props.theme.colors.logospan};
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};

  @media screen and (max-width: 991.98px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 992px) {
    width: 456px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`;

export const BtnMore = styled.button`
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.secondary};

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 416px;
    display: block;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const FlexWrapper = styled.div`
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 992px) and (max-width: 1439.98px) {
    margin-bottom: 24px;
  }
`;
