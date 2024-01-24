import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";


const Container = styled.div`

color: ${COLORS_THEME.LIGHT_100};

font-size: 1.5rem;


font-weight: 300;
line-height: 140%; 
padding-left: 13px;
padding-top: 35px;
margin-left: 12px;

display: flex;
flex-direction: column;

gap: 14px;
.link{

    border-bottom: solid ${COLORS_THEME.DARK_1000} 2px;
}

max-width: 340px;


`;

export default Container;