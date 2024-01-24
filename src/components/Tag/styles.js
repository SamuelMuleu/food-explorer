import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";

export const Container = styled.div`

background: inherit;

display: flex;
flex-direction: row;
flex-wrap: wrap;
position: relative;
svg{
    position: absolute;
    right:29%;
   
}
input{
    padding: 2%;

}
input::placeholder{
 
    padding-left: 5px;
    padding: 2%;
    color: ${COLORS_THEME.LIGHT_500};
    font-size: 0.9rem;
}

.ingredient{
    border-radius:  8px;
 
  width: 70%;
    background-color: ${COLORS_THEME.LIGHT_600};
    border-radius: 5px;


}
.ingredient-add{
width: 70%;
    color: ${COLORS_THEME.LIGHT_500};
 background-color: inherit;
 border:  0.17rem dashed ${COLORS_THEME.LIGHT_500};
 border-radius: 5px;
}



`;