import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";


const Container = styled.div`
color: ${COLORS_THEME.LIGHT_100};

display: flex;


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
    padding-top: 14px;
}

}
&>p{
    @media (min-width:${DEVICE_BREAKPOINTS.LG}) {
 margin-left :800px ;
}
}
.copyright{
color: ${COLORS_THEME.LIGHT_100};
}


`;

export default Container;