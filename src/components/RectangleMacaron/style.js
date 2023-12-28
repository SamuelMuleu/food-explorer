// style.js
import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";

const Container = styled.div`
display: flex;
width: 370px;
height: 100px;
border-radius: 6px;
margin: 9px;

margin-top: 44px;

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
    margin-left: 22px;
    padding-bottom: 20px;
    gap: 5px;
  }
  >h2{

    font-weight: 600;
  }

`;

export default Container;
