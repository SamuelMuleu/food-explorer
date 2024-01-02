// style.js
import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

const Container = styled.div`
display: flex;
width: 370px;
height: 100px;
border-radius: 6px;
margin: 12px;


margin-top: 40px;

 align-items: center;

background:linear-gradient(180deg, #091E26 0%, #00131C 100%);
 > img {

    width: 200px;
    height: 149px; 
    overflow: hidden;
    opacity: 0.8;

    clip-path: polygon(30% 0, 100% 0, 100% 80%, 0 97% ); 
  }
  >div{
    display: flex;
 
    flex-direction: column;
    padding-top: 20px;
    font-weight: 400;
    color: ${COLORS_THEME.LIGHT_300};
    margin-left: 20px;
  
    padding-bottom: 20px;
    gap: 5px;
  }
  >h2{

    font-weight: 600;
    
  }


@media (min-width:${DEVICE_BREAKPOINTS.LG}){
  
  width: 1090px;
  height: 260px;
margin-left: 100px;
justify-content:flex-start;
margin-top: 82px;
  > img {
    padding-top: 30px;
width: 580px;
height: 406px;
opacity: 0.8;

clip-path: polygon(0% 0 , 100% 0, 100% 80%,0% 81% ); 
}
>div{


  >h2{
    font-size:3.39rem ;
    font-weight: 900;
    line-height: 140%;
    letter-spacing: 2px;
  }


}

}
`;


export default Container;
