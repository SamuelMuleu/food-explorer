import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

export const Container = styled.div`

background: inherit;

display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;



input{

    padding: 2%;

}
input::placeholder{
 
    padding-left: 5px;

    color: ${COLORS_THEME.LIGHT_500};
    font-size: 1rem;
}

.ingredient{
 border-radius:  8px;
display: flex;
flex-direction: row;
flex-wrap:wrap ;
margin: 4px;
 svg{
position: relative;
  left: 45%;
  bottom:1%;
   
}
  width: 50%;
  margin: 10px;
  height: 20px;
    background-color: ${COLORS_THEME.LIGHT_600};
    border-radius: 5px;


}
.ingredient-add{


    color: ${COLORS_THEME.LIGHT_500};
 background-color: inherit;
 border:  0.17rem dashed ${COLORS_THEME.LIGHT_500};
 border-radius: 5px;

}

.plus{

position: absolute;
margin-left: 75%;
margin-top: 2%;

  


}


@media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
  
  .ingredient-add{

height: 20px;

}
  .ingredient{
    border-radius:  8px;


height: 20px;
    background-color: ${COLORS_THEME.LIGHT_600};
    border-radius: 5px;


}
.plus{
  position: relative;
left: -3%;
top: 10%;
margin: 0;



}
}



`;