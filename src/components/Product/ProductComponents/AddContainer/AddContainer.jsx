import {
  FlexWrapper,
  AddToFavoriteContainer,
  AddToComparingContainer,
  FavoriteIcon,
  CompareIcon,
  AddText,
} from './AddContainer.styled';
import icon from '../../../../assets/icons/sprite.svg';

export const AddContainer = () => {
  return (
    <FlexWrapper>
      <AddToFavoriteContainer>
        <FavoriteIcon>
          <use href={`${icon}#icon-heart`}></use>
        </FavoriteIcon>
        <AddText>У вибране</AddText>
      </AddToFavoriteContainer>
      <AddToComparingContainer>
        <CompareIcon>
          <use href={`${icon}#icon-statistics`}></use>
        </CompareIcon>
        <AddText>Порівняти</AddText>
      </AddToComparingContainer>
    </FlexWrapper>
  );
};
