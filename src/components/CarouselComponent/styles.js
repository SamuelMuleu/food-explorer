import styled from "styled-components";

import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";
import { COLORS_THEME } from "../../styles/theme";


const Container = styled.div`
width: 100%;







@media (min-width:${DEVICE_BREAKPOINTS.LG}) {
width: 100%;
.swiper-button-prev,
.swiper-button-next {
  width: 50px;
  height: 50px;
  color: ${COLORS_THEME.LIGHT_100}; /* Cor desejada para as setas */

}


    
}

@media (max-width:${DEVICE_BREAKPOINTS.MD}) {

    .swiper-button-prev,
.swiper-button-next {
    display: none;


}
}





  
`;
export { Container };