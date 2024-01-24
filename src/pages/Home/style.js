import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";
import { COLORS_THEME } from "../../styles/theme";

const Container = styled.div`

height: 100vh;


display: flex;
flex-direction: column;
width: 100vw;


.div-carousel{
    max-width: 100%;
    width: 1350px;
    
    
@media (max-width:${DEVICE_BREAKPOINTS.MD}){

    max-width:400px;
    position: relative;



}


color:${COLORS_THEME.LIGHT_100} ;
font-size:1.7rem ;
font-family: 'Roboto', sans-serif;
padding: 20px 5px 35px 30px ;


};
;

footer{

p{
    display:flex;
    align-items: center;
    justify-content: space-around;
}
}
`;

export default Container;