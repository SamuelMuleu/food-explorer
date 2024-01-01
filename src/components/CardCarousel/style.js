import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";

const Container = styled.div`

display: flex;
align-items: center;
padding: 20px;
height: 350px;
color:${COLORS_THEME.LIGHT_100} ;
>div{
border: 3px solid ${COLORS_THEME.DARK_100};
height: 330px;

>button{
   
}
}
`;

export default Container;