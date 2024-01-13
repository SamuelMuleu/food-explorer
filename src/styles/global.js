import { createGlobalStyle } from "styled-components";
import { COLORS_THEME } from "./theme";
import  DEVICE_BREAKPOINTS  from "./deviceBreakpoints";

const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

a{
  text-decoration: none;
  color: inherit;
}

:root{
  font-size: 12px;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){

body{
  font-size: 16px;
}
  }
}
body{

  display: flex;
  place-items: center;
  min-width: 100vw;
  min-height: 100vh;
  
  background-color: ${(COLORS_THEME.DARK_400)};

}
body, input , button ,textarea{

  font-family: 'roboto' , sans-serif;
  font-size: 1rem;
  outline: none;
}  
`;
export default GlobalStyles;
