import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme.js";

const Container = styled.div`
  label {
    color: ${COLORS_THEME.LIGHT_400};
    font-size: 16px;
  }

  input {
    height: 48px;
    width: 316px;
    border-radius: 8px;
    background-color: ${COLORS_THEME.DARK_900};
  }
`;
export default Container;
  