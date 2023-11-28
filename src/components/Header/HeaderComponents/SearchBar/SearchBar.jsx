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

const SearchBar = () => {
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
          <SearchBtn type="button">
            <Icon id="search" />
          </SearchBtn>
        </BtnsWrap>
        {/* <BtnsWrap> */}

        {/* <svg viewBox="0 0 24 24">
              <use xlinkHref={search}  fill="#AAABB9" />
            </svg> */}
        {/* {search && (
            <ResetBtn>
              <svg viewBox="0 0 24 24">
                <use xlinkHref={cross}/>
              </svg>
            </ResetBtn>
          )} */}
        {/* </BtnsWrap> */}
      </Form>
    </ContainerNoticesSearch>
  );
};

export default SearchBar;
