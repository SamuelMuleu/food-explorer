import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

const Container = styled.div`
width: 100vw;

flex-direction: column;

display: none;


&[data-menu-is-open="true"]{
display: block;

}





@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
display: none;
}

input{

padding-left:30px;

margin-left: 20px;
margin-top: 36px;
 
width: 342px;
 }




`;


export default Container;

