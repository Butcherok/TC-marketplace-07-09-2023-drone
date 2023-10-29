import styled from 'styled-components';

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SocialsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SocialsItem = styled.li``;

export const LogoSocial = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
`;


export const SocialsReserved = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.button};

  color: ${props => props.theme.colors.secondary};
`;
