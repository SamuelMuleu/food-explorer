import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";


const Container = styled.div`

>div{
     display: flex;
     justify-content: center;
     gap:15px;
     padding-bottom: 8px;
     padding-top: 8px;
   font-size: 1.5rem;
   font-weight:bold;

    >button{
        border: none;
        background-color: inherit;
        color: ${COLORS_THEME.LIGHT_100};
        
       
    }


}    

`;

export default Container;
