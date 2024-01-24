import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";


const Container = styled.div`



display: flex;
justify-content: center;

padding: 20px;
.ingredients-list{
    display:flex;

    flex-direction: row;
    flex-wrap:wrap;
    gap: 10px;
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
@media (min-width: ${ DEVICE_BREAKPOINTS.LG}) {


.ingredients-list{
    
    flex-wrap: nowrap;
    position: absolute;
    top: 54%;
    right: 39%;
    
}
.ingredient{
    min-height: 40px;
    min-width: 40%;
}
    
    
}


`;

export default Container;