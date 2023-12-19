import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme.js";

const Container = styled.div`
  label {
    color: ${COLORS_THEME.LIGHT_400};
    font-size: 16px;
 
  }

  input {
    margin-top: 8px;
    height: 48px;
    width: 316px;
    border-radius: 8px;
    border: none;
    background-color: ${COLORS_THEME.DARK_900};

  }
  ::placeholder{
    padding : 8px;
  }
`;
export default Container;
