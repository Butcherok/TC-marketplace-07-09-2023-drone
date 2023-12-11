import React, { useState, useRef } from 'react';
import {
  BtnsWrap,
  ContainerNoticesSearch,
  Form,
  Input,
  SearchBtn,
  ResetBtn,
} from './SearchBar.styled';
import Icon from 'components/UI/Icon/Icon';

const SearchBar = ({ onClick }) => {
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

  // const onShowSearchInput = () => {
  //   setIsShowInput(!isShowInput);
  // };
  return (
    <ContainerNoticesSearch>
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
          {searchText && (
            <ResetBtn type="button" onClick={handleResetClick}>
              <Icon id="reset" />
            </ResetBtn>
          )}
          <SearchBtn type="button" onClick={onClick}>
            <Icon id="search" />
          </SearchBtn>
        </BtnsWrap>
      </Form>
    </ContainerNoticesSearch>
  );
};

export default SearchBar;
