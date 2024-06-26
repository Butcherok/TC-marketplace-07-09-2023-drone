import { useState, useRef } from 'react';
import {
  SearchBarContainer,
  Form,
  BtnsWrap,
  Input,
} from '../SearchBarMobile/SearchBarMobile.styled';

import Icon from '../../../UI/Icon/Icon';

const SearchBarMobile = ({ isShowMobileSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [placeholder, setPlaceholder] = useState('Пошук');
  const initialPlaceholder = 'Пошук';
  const inputRef = useRef(null);

  const handleInputChange = event => {
    setSearchText(event.target.value);
  };

  const handleResetClick = () => {
    setSearchText('');
    inputRef.current.focus();
    setPlaceholder('Що будемо шукати?');
  };

  const handleInputClick = () => {
    setPlaceholder('Що будемо шукати?');
  };

  const handleInputBlur = () => {
    setPlaceholder(initialPlaceholder);
  };
  return (
    <SearchBarContainer isShowMobileSearch={isShowMobileSearch}>
      <Form>
        <Input
          type="text"
          placeholder={placeholder}
          value={searchText}
          onChange={handleInputChange}
          onClick={handleInputClick}
          onBlur={handleInputBlur}
          ref={inputRef}
        />
        <BtnsWrap>
          {searchText && <Icon id="cross" onClick={handleResetClick} />}
          <Icon id="arrow-right" />
        </BtnsWrap>
      </Form>
    </SearchBarContainer>
  );
};

export default SearchBarMobile;
