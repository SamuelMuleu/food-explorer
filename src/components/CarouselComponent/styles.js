import styled from "styled-components";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";



const Container = styled.div`


        

position: relative;


.navigation-wrapper {
  position: relative;
}

.dots {
  display: flex;
  padding: 10px 0;
  justify-content: center;
}

.dot {
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;
}

.dot:focus {
  outline: none;
}

.dot.active {
  background: #000;
}

.arrow {
  width: 35px;
  height: 35px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
}

.arrow--left {
  left: 5px;
}

.arrow--right {
  left: auto;
  right:100px;
}

.arrow--disabled {
  fill: rgba(255, 255, 255, 0.5);
}
.arrow{
    
    

    @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
        
display: none;
    }

  }

  
`;
export default Container;