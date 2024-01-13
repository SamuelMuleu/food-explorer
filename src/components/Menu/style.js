import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

const Container = styled.div`


width: 100%;
min-height: 100vh;
background-color:${COLORS_THEME.DARK_500} ;
flex-direction: column;
display: none;

@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  
display: none;
min-height: 100vh;

position:fixed ;
z-index: 1;
left: 0;
top: 0;
overflow: auto;



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


footer{
margin-top: 100%;
overflow: hidden;
min-height: 100vh;
 }







`
;


export default Container;

