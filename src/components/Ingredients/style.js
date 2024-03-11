import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";


const Container = styled.div`

display: grid;

grid-template-columns:1fr 70%;

width: 500px;
padding: 20px;
.ingredients-list{
    display:flex;

    flex-direction: row;

gap: 20px;
    width: 240px;
    
}
.ingredient{
background-color: ${COLORS_THEME.DARK_1000};
padding: 6px;
border-radius: 4px;
list-style-type: none;
width: 30%;
font-weight: 500;
text-align: center;
}
@media (min-width: ${DEVICE_BREAKPOINTS.LG}) {


.ingredients-list{

    position: relative;
    bottom: 700%;
    left: 200%;
    flex-wrap: nowrap;

    
}
.ingredient{
    min-height: 40px;
    min-width: 40%;
    
}
    
    
}


`;

export default Container;