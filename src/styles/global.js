import { createGlobalStyle } from "styled-components";
import { COLORS_THEME } from "./theme";

const GlobalStyles = createGlobalStyle`
body{
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  
  background-color: ${(COLORS_THEME.DARK_400)};

}

`;
export default GlobalStyles;
