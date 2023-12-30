import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme.js";

const Container = styled.div`
  
  
  
  
  
  label {
    color: ${COLORS_THEME.LIGHT_400};
    font-size: 16px;
    display: flex;
align-items: center;
 
  }

  input {

    height: 45px;
    width: 316px;
    border-radius: 8px;
    border: none;
    background-color: ${COLORS_THEME.DARK_900};

  }
  ::placeholder{
    padding : 8px;
  


  }
  .input-container {
  margin-left: 8px;
  font-size: 1.6rem;
  margin-bottom: 1.3px;

}

.svg-container {
  position:absolute;
color: ${COLORS_THEME.LIGHT_100};
padding-top: 28px;
padding-left: 12px;
margin-top: 14px;
margin-left: 10px;

}
  

`;


export default Container;
