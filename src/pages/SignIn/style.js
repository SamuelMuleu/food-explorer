import styled from "styled-components";
import  DEVICE_BREAKPOINTS  from "../../styles/deviceBreakpoints";
import { COLORS_THEME } from "../../styles/theme";

const Container = styled.div`
  font-family:Roboto,'Open Sans', sans-serif;
box-sizing:border-box;  

display:grid;
place-items: center;
padding:32px;



@media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
  display: grid;
  place-items: center;
  margin-left: 16rem;
  
  & > {
    background-color: ${COLORS_THEME.DARK_700};
  }

}


@media (min-width: ${DEVICE_BREAKPOINTS.LG}) {

  display: flex;
  padding: 0;
  margin: 0;
margin-left: 90px;
gap: 70px;

}

@media (min-width: ${DEVICE_BREAKPOINTS.XL}) {

gap: 370px;

}





`;
export default Container;
