import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

const Container = styled.div`


width: 100%;
  height: 100vh;
background-color:${COLORS_THEME.DARK_500} ;
  flex-direction: column;
  display: none;







@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
display: none;

position:absolute ;
z-index: 2;

&[data-menu-is-open="true"]{
    display: block;


}


}

input{

padding-left:30px;

margin-left: 20px;
margin-top:26px;
 
width: 342px;
 }




`;


export default Container;

