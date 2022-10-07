import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ThemeInterface } from './Theme';
const GlobalStyles = createGlobalStyle<{ theme: ThemeInterface }>`
  
  ${reset}
 
  body{
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
    background-color : ${(p) => p.theme.backgroundColor.default};
    color : ${(p) => p.theme.color.default};
  }


`;

export default GlobalStyles;
