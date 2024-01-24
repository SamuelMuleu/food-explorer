import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

const Container = styled.div`

display: flex;

.pencilButton{



   background: none;

border: none;
   color: ${COLORS_THEME.LIGHT_100};
   border-radius: 50%;
   display: flex;
   position: absolute;
   top: 19%;
   right: 27%;

>svg{

    font-size: 20px;
}

}
@media (max-width:${DEVICE_BREAKPOINTS.MD}) {
        
    display: flex;
justify-content: center;
}
@media (min-width:${DEVICE_BREAKPOINTS.LG}) {
.pencilButton{
position: relative;

right: 0%;
left: 90%;

   background: none;

   color: ${COLORS_THEME.LIGHT_100};
   border-radius: 50%;

}
}

padding-top: 42px;
color:${COLORS_THEME.LIGHT_100} ;
align-items: center;

position: relative;


>div{
border: 3px solid ${COLORS_THEME.DARK_300};
background-color: ${COLORS_THEME.DARK_200};
border-radius: 10px;
padding: 20px;





.heartButton{
position: absolute;
   background: inherit;
   border: none;
   color: ${COLORS_THEME.LIGHT_100};
   border-radius: 50%;
 left: 15%;
 top: 19%;

>svg{

    font-size: 20px;
}

}

>img{

height:88px;
width: 88px;
margin-left: 30px;

}
>h1{

font-size: 1.1rem;
font-weight: 200;
text-align:center;
margin-top: 2px;
padding: 8px;
white-space: nowrap;





}
>p{
color: ${COLORS_THEME.CAKE_100};
padding:8px;
text-align: center;
font-weight: 500;
}

}


`;
const ButtonStyle = styled.div`

display: flex;
justify-content: center;

`;

export { Container, ButtonStyle };