import {
  IconCheck,
  AvailableContainer,
  AvailableText,
  StarsContainer,
  FlexWraper,
  FlexContainer,
  IconStar,
  Responses,
} from './ResponseContainer.styled';
import icon from '../../../../assets/icons/sprite.svg';

export const ResponseContainer = () => {
  return (
    <FlexWraper>
      <FlexContainer>
        <AvailableContainer>
          <IconCheck>
            <use href={`${icon}#icon-check`}></use>
          </IconCheck>
          <AvailableText>в наявності</AvailableText>
        </AvailableContainer>
        <StarsContainer>
          <li>
            <IconStar>
              <use href={`${icon}#icon-star`}></use>
            </IconStar>
          </li>
          <li>
            <IconStar>
              <use href={`${icon}#icon-star`}></use>
            </IconStar>
          </li>
          <li>
            <IconStar>
              <use href={`${icon}#icon-star`}></use>
            </IconStar>
          </li>
          <li>
            <IconStar>
              <use href={`${icon}#icon-star`}></use>
            </IconStar>
          </li>
          <li>
            <IconStar>
              <use href={`${icon}#icon-star`}></use>
            </IconStar>
          </li>
        </StarsContainer>
      </FlexContainer>
      <Responses>12 відгуків</Responses>
    </FlexWraper>
  );
};
