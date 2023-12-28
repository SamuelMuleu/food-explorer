import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";




const Container = styled.div`
display: flex;
gap: 0.5rem;
background-color: ${COLORS_THEME.DARK_700};
height:100px ;
width: 100%;




padding: 58px 0 22px 24px;





`;
const Button = styled.button`

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