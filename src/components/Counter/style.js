import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";


const Container = styled.div`

>div{
     display: flex;
     justify-content: center;
     gap:10px;
     padding-bottom: 8px;
     padding-top: 8px;
    >button{
        border: none;
        background-color: inherit;
        color: ${COLORS_THEME.LIGHT_100};
    
    }


}    

`;

export default Container;
