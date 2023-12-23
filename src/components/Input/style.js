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
  position: relative;
  margin-left: 8px;
  font-size: 1.6rem;
  margin-bottom: 2px;

}

.svg-container {
  position: absolute;
color: ${COLORS_THEME.LIGHT_100};
padding-top: 24px;
padding-left: 12px;

}
  

`;


export default Container;
