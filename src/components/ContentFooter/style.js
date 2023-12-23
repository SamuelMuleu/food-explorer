import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";


const Container = styled.div`
color: ${COLORS_THEME.LIGHT_100};

display: flex;


gap: 10px;

&> img{

width: 1.8rem;
padding-top: 35px;
margin-left: 34px;

}
&> p{
    height: 22px;
color: ${COLORS_THEME.LIGHT_700};
word-spacing: 0.1rem;
padding-top: 39px;


}


`;

export default Container;