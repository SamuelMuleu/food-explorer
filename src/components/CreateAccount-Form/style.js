import styled from "styled-components";
import  DEVICE_BREAKPOINTS  from "../../styles/deviceBreakpoints";
import { COLORS_THEME } from "../../styles/theme";

const Container = styled.div`

display: flex;
  flex-direction: column;
  max-width: 300px;
  max-height: 30rem;

  
  gap: 32px;
  
  & button{

    width: 320px;
  }
 

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 440px;
    background-color:${COLORS_THEME.DARK_700} ;

     
  border-radius:8px;

    padding:80px;
    margin-top: -90px;
    margin-bottom: -90px;
  box-sizing: content-box;



  }  
    


`;

const DesktopHeader = styled.h1`

color: ${COLORS_THEME.LIGHT_100};
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: block;
   margin-left:4rem;
   margin-top: -3rem;
  

  }
`;

export { Container, DesktopHeader };