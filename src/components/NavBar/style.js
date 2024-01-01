import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINT from "../../styles/deviceBreakpoints";

const Container = styled.header`


display: flex ;
justify-content: space-between;
background-color: ${COLORS_THEME.DARK_700};
height: 10px;
top: 0;
align-items: center;
width: 100vw;
padding: 40px;





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
const ContainerInput = styled.div`




input{
    width: 580px;
    height: 40px;
    border-radius: 0%;
}

::placeholder{
text-align: center;


}

.input-container{
    display: flex;
    align-items: center;


   
    padding-left: 140px;
    
    
    
}

@media (max-width:${DEVICE_BREAKPOINT.LG}) {
display: none;


}

`;
const ReceiptButton = styled.div`



border-radius: 6px;
width:220px;



svg{
    width: 23px;
    height: 22px;
    vertical-align:top;

}
span{

    vertical-align:bottom;
}

@media (max-width:${DEVICE_BREAKPOINT.LG}) {
display: none;


}

`;

export { Container, ButtonStyle, ContainerInput, ReceiptButton };