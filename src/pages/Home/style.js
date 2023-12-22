import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

const Container = styled.div`



@media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
    
}


display: flex;
flex-direction: column;



margin-top: -60px;

input{

padding-left:30px;

margin-left: 20px;
 
 }



`;

export default Container;