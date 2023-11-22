import React from 'react';
import {
  BtnsWrap,
  ContainerNoticesSearch,
  Form,
  Input,
  SearchBtn,
} from './SearchBar.styled';
import Icon from 'components/UI/Icon/Icon';

// import search from '../../../../assets/icons/SearchBar/search.svg'
// import cross from '../../../../assets/icons/SearchBar/cross.svg'

const SearchBar = () => {
  return (
    <ContainerNoticesSearch>
      {/* <SearchBtn type="button">
        <Icon id="search" />
      </SearchBtn> */}

      <Form>
        <Input type="text" placeholder="Пошук" />
        <BtnsWrap>
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
