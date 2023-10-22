import { createGlobalStyle } from "styled-components";

import Inter from "../assets/Fonts/Inter/Inter-VariableFont_slnt,wght.ttf";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: local("Inter"), url(${Inter}) format("truetype");
  }
`;

export default FontStyles;