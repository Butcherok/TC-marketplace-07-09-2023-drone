import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
}

  body { 
    font-family: ${props => props.theme.fonts.main};
    background-color: ${props => props.theme.colors.background};
    margin: 0 ;
    padding: 0; 
  }

  ul, li, ol {  
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
  
a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

  img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
  }

  button {
    cursor: pointer;
    font-family: ${props => props.theme.fonts.main};
    border: none;
    background: none;
    padding: 0;
}

svg{
  fill: none;
}

input {
  font-family: inherit;
  outline: none;
}
`;
