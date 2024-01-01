import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";

const Container = styled.div`

display: flex;
padding: 20px;
gap: 16px;
color:${COLORS_THEME.LIGHT_100} ;
>div{
border: 3px solid ${COLORS_THEME.DARK_300};
background-color: ${COLORS_THEME.DARK_200};
border-radius: 18px;


>button{
   
}
}
`;

export default Container;