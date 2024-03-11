import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

const Container = styled.div`
display: flex;

flex-direction: row-reverse;
width:100%;
height: 40vh;

.pencilButton{



   background: none;

border: none;
   color: ${COLORS_THEME.LIGHT_100};
   border-radius: 50%;
   display: flex;


>svg{

    font-size: 20px;
}

}


@media (min-width:${DEVICE_BREAKPOINTS.LG}) {
   flex-direction: row;
gap:50px;
 justify-content: center;
.pencilButton{


   background: none;

   color: ${COLORS_THEME.LIGHT_100};
   border-radius: 50%;

}
}

padding-top: 2px;
padding-bottom: 2px;
color:${COLORS_THEME.LIGHT_100} ;
align-items: center;




>div{
border: 5px solid ${COLORS_THEME.DARK_300};
background-color: ${COLORS_THEME.DARK_200};
border-radius: 10px;






.heartButton{
   display: flex;


   background: inherit;
   border: none;
   color: ${COLORS_THEME.LIGHT_100};
   border-radius: 50%;


>svg{

    font-size: 20px;
}

}

>img{

height:88px;
width: 88px;
margin-left: 30px;
border-radius: 50%;

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