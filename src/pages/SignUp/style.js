import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";
import { COLORS_THEME } from "../../styles/theme";

const Container = styled.div`

font-family:Roboto,'Open Sans', sans-serif;
box-sizing:border-box;  

display:grid;
place-items: center;
height: 100vh;

padding: 20px;
@media (min-width: ${DEVICE_BREAKPOINTS.LG}) {

  padding: 0;
  margin: 0;
  display: flex;
  margin-left: 80px;
  gap: 200px;
  img{
  display: none;
}
};

  
  & > {
    background-color: ${COLORS_THEME.DARK_700};
  };


@media (min-width: ${DEVICE_BREAKPOINTS.XL}) {

gap: 370px;

}



`;

export default Container;