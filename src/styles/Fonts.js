import { createGlobalStyle } from 'styled-components';

import Inter from '../assets/Fonts/Inter/Inter-VariableFont_slnt,wght.ttf';
import RedHatDisplay from '../assets/Fonts/RedHatDisplay/RedHatDisplay-VariableFont_wght.ttf';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: local("Inter"), url(${Inter}) format("truetype");
  }

  @font-face {
    font-family: "Red Hat Display";
    src: local("Red Hat Display"), url(${RedHatDisplay}) format("truetype");
  }
`;

export default FontStyles;
