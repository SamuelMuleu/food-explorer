import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";

import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";


const Container = styled.div`
display: flex;
gap: 0.5rem;
background-color: ${COLORS_THEME.DARK_700};
height:110px ;
top: 0;
position: fixed;
width: 100%;

padding: 68px 0 22px 24px;



`;
const Button = styled.button`

border: none;
background-color: inherit;
color:${COLORS_THEME.LIGHT_100} ;
width: 18px;
height: 18px;

& > svg{

    font-size: 2rem;

}

`;

const Menu = styled.h3`
color: ${COLORS_THEME.LIGHT_100} ;
padding-left: 7px;
font-size: 1.7rem;
`;

export { Container, Button, Menu };