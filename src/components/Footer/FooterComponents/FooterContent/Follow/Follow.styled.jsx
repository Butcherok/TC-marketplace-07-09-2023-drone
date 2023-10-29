import styled from 'styled-components';

export const FollowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
`;

export const FollowTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};
  max-width: 160px;
`;

export const FollowForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  min-width: 160px;
`;

export const FollowLabel = styled.label`
  width: 100%;
`;

export const FollowInput = styled.input`
  display: block;
  text-align: start;
  width: 100%;
  height: 33px;
  padding: 8px 12px;

  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.button};

  color: ${props => props.theme.colors.primary};

  &::placeholder {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const FollowSubmit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FollowSubmitText = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.button};

  color: ${props => props.theme.colors.secondary};
`;
