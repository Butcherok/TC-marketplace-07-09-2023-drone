import {
  IconSearch,
  Input,
  InputContainer,
  SearchBtn,
} from './FindInput.styled';
import icon from '../../../assets/icons/sprite.svg';

const FindInput = () => {
  return (
    <InputContainer>
      <form>
        <Input placeholder="Пошук за ключовими словами" />

        <SearchBtn type="button">
          <IconSearch>
            <use href={`${icon}#icon-search`}></use>
          </IconSearch>
        </SearchBtn>
      </form>
    </InputContainer>
  );
};

export default FindInput;
