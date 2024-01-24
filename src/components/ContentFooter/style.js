import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";


const Container = styled.div`
color: ${COLORS_THEME.LIGHT_100};

display: flex;

width: 100vw;
gap: 10px;

&> img{

width: 1.8rem;
padding-top: 20px;
margin-left: 34px;
@media (max-width:${DEVICE_BREAKPOINTS.MD}) {
padding-bottom: 12px;
padding-top: 12px;
}

}
&> h3{
color: ${COLORS_THEME.LIGHT_700};
word-spacing: 0.1rem;
padding-top: 20px;
@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
width: 100px;
display: block;
}

}
&>p{
    @media (min-width:${DEVICE_BREAKPOINTS.LG}) {
 margin-left :800px;
 padding-top: 30px;
 margin-right:20px;
}
@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding-top: 16px;
}
}
.copyright{
color: ${COLORS_THEME.LIGHT_100};
}


`;

export default Container;