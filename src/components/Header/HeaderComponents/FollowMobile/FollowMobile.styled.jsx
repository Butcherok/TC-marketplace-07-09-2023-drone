import styled from 'styled-components';

export const StyledFollowMobile = styled.div`
  width: 100%;
  padding-top: 64px;
`;

export const FollowTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};
  margin-bottom: 16px;
  `;

export const FollowForm = styled.form`
  width: 100%;
`;

export const FollowLabel = styled.label`
  width: 100%;
`;

export const FollowInput = styled.input`
  width: 100%;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.button};
  background-color: #f2f2f2;
  color: ${props => props.theme.colors.secondary};
  padding: 14px 12px;
  border: 1px solid transparent;
  outline: none;

  &:active,
  &:focus {
    border: 1px solid #0052cc;
  }
`;

export const FollowSubmit = styled.div`
  .subscribe-btn {
    width: 100%;
    font-size: ${props => props.theme.fontSizes.xs};
    line-height: ${props => props.theme.lineHeights.button};
    font-weight: ${props => props.theme.fontWeights.bold};
    margin: 16px 0 8px;
    padding: 12px 16px;
  }
`;

export const FollowSubmitText = styled.p`
  width: 100%;
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: ${props => props.theme.lineHeights.button};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: #7b7b89;
`;
