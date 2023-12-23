import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
}

input{

padding-left:30px;

margin-left: 20px;
margin-top: 138px;
 
width: 342px;
 }




`;


export default Container;

