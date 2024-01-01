import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

const Container = styled.div`

color:${COLORS_THEME.LIGHT_100} ;

svg{
    width: 32px;
    height: 32px;
    
}
@media (max-width:${DEVICE_BREAKPOINTS.LG}) {
display: none;


}

`;

export default Container;