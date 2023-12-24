import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

const Container = styled.div`
  color: ${COLORS_THEME.LIGHT_100};
  display: flex;
  gap: 10px;
font-size:1.1rem;
  >img{

width: 24px;
}
`;
export default Container;
