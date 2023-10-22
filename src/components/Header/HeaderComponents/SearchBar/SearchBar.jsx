import React from 'react';
import { BtnsWrap, ContainerNoticesSearch, Form, Input, ResetBtn, SubmitBtn } from './SearchBar.styled';
import search from '../../../../assets/icons/SearchBar/search.svg'
import cross from '../../../../assets/icons/SearchBar/cross.svg'

const SearchBar = () => {
  return (
    <ContainerNoticesSearch>
      <Form>
        <Input
          type="text"
          placeholder="Пошук"
        />
        <BtnsWrap>
          <SubmitBtn type="submit">
            <svg viewBox="0 0 24 24">
              <use xlinkHref={search}  fill="#AAABB9" />
            </svg>
          </SubmitBtn>
          {search && (
            <ResetBtn>
              <svg viewBox="0 0 24 24">
                <use xlinkHref={cross}/>
              </svg>
            </ResetBtn>
          )}
        </BtnsWrap>
      </Form>
    </ContainerNoticesSearch>  );
};

export default SearchBar;
