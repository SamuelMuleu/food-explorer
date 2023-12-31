import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";

const Container = styled.div`

display: flex;


padding-top: 42px;
color:${COLORS_THEME.LIGHT_100} ;
align-items: center;



>div{
border: 3px solid ${COLORS_THEME.DARK_300};
background-color: ${COLORS_THEME.DARK_200};
border-radius: 10px;
padding: 20px;
position: relative;



.heartButton{
   position: absolute;

   background: inherit;
   border: none;
   color: ${COLORS_THEME.LIGHT_100};
   border-radius: 50%;
   top: 0%;
   left: 180px;
   
>svg{

    font-size: 20px;
}

}
>img{

height:88px;
width: 88px;
margin-left: 35px;

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
>button{
    width: 162px;
padding: 3px;
}

`;

export { Container, ButtonStyle };