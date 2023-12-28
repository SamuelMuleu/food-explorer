import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINT from "../../styles/deviceBreakpoints";

const Container = styled.header`


display: flex ;
justify-content: space-between;
background-color: ${COLORS_THEME.DARK_700};
height:100px;
top: 0;
align-items: center;
width: 100vw;
padding: 15px;



`;
const ButtonStyle = styled.button`
background: none;
border: none;


color: ${COLORS_THEME.LIGHT_100};

@media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    display: none;
    position: absolute;

};


>svg{
    font-size: 2.5rem;
}


`;

export { Container, ButtonStyle };