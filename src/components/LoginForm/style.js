import styled from "styled-components";
import  DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";
import { COLORS_THEME } from "../../styles/theme";


const Container = styled.form`

display: flex;
  flex-direction: column;
  max-width: 316px;
  margin: 0 auto;
  gap: 32px;


  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
height: 380px;

    background-color:${COLORS_THEME.DARK_700} ;

     
  border-radius:8px;

    padding:80px;
  box-sizing: content-box;



  }  
  


`;

const DesktopHeader = styled.h1`

color: ${COLORS_THEME.LIGHT_100};
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: block;
   margin-left:6rem;

  }
`;

export { Container, DesktopHeader };