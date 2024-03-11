import styled from "styled-components";
import { COLORS_THEME } from "../../styles/theme";
import DEVICE_BREAKPOINTS from "../../styles/deviceBreakpoints";

const Container = styled.div`

min-width: 100vw;
min-height: 100vh;
padding:11px;
display: flex;
padding-top: 6px;
flex-direction: column;


form{
  display: grid;
justify-content: center;

padding-bottom: 22px;



input{

font-weight: 500;
font-size: 1.1rem;
padding-left: 2px;
color: ${COLORS_THEME.LIGHT_400};
width: 96%;
background-color: ${COLORS_THEME.DARK_800};
}
}
label{
  padding-bottom: 10px;
  display: flex;
  padding: 3%;
  
}

.imageDish{
    color: ${COLORS_THEME.LIGHT_400};
    word-spacing: 1px;
 font-weight: 400;
 padding-left: 12px;
 font-size: 1.3rem;
 padding-bottom: 4px;

  padding-top: 20px;

}
.inputs{

  padding-left: 12px;
  padding-bottom: 2px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 12px;
  
}



input[type="file"] {

display:none;

}
.custom-file-input {
display: flex;
height: 45px;
max-width: 93%;
background-color: ${COLORS_THEME.DARK_800};
  cursor: pointer;
  padding: 23px;
  padding-right:6%;
  justify-content: center;
  margin:10px;
border-radius: 7px;
font-size: 1.2rem;
font-weight: 500;
  color:${COLORS_THEME.LIGHT_100};
  gap: 10px;
  align-items: center;
  svg{
  
    font-size: 2.5rem;

  }

}
.label{
  color: ${COLORS_THEME.LIGHT_400};
  font-size: 1.3rem;

}

.Ingredients{
  
  margin-top: 10px;
  margin-left: 3%;
  column-count: 3;  
  color: ${COLORS_THEME.LIGHT_400};
  font-size: 1.3rem;
  padding: 10px;
  max-height: 100%;
  max-width: 90%;
  border-radius: 8px;
  background-color: ${COLORS_THEME.DARK_800};


  
}
.buttons{
  display: flex;
  padding: 10px;
gap: 24px;

}

//Desktop

@media (min-width:${DEVICE_BREAKPOINTS.LG}) {

min-width: 100vw;
min-height: 100vh;
padding:75px;
display: flex;
padding-top: 30px;
flex-direction: column;

form{
display: grid;
grid-template-columns:50% 53%;
grid-template-rows: 10%;
row-gap: 20px;

padding: 10px;
align-items: center;
max-width: 40vw;
max-height: 100vh;

input{
font-weight: 500;
font-size: 1.1rem;

width: 400px;
color: ${COLORS_THEME.LIGHT_400};

background-color: ${COLORS_THEME.DARK_800};
}
}
label{
  padding-bottom: 10px;
  display: flex;
  padding: 3%;
  
}

.imageDish{
    color: ${COLORS_THEME.LIGHT_400};
    word-spacing: 1px;
 font-weight: 400;
 padding-left: 20px;
 font-size: 1.3rem;


}
.inputs{

gap: 30px;
  display: flex;
  flex-direction: row;
margin: 40px;

  
}
.inputsPrice{


padding-left: 187%;
padding-bottom: 4%;
 label{
      padding-bottom: 12px;
 }
  
}
.inputImage{
  margin: 6px;


}



input[type="file"] {
display:none;

}
.custom-file-input {
height: 45px;
width: 190px;
  cursor: pointer;
  padding: 26px;
  padding-right:8%;
border-radius: 7px;
font-size: 1.2rem;
font-weight: 500;
  color:${COLORS_THEME.LIGHT_100};


}
.label{
  color: ${COLORS_THEME.LIGHT_400};
  font-size: 1.3rem;


}

.Ingredients{

display: flex;
flex-direction: column;
 column-count: 3;

  color: ${COLORS_THEME.LIGHT_400};
  font-size: 1.3rem;
  

  min-height: 48px;
  min-width: 700px;
  margin-bottom : 23px;
  border-radius: 8px;
  background-color: ${COLORS_THEME.DARK_800};

}

.description{


height: 140%;
width: 480%;

}
.buttons{
position: absolute;
left: 79.5%;
padding-top: 2%;

}
.buttonRemove{
position: absolute;
right: 110%;
}

  
}

`;
const BackPage = styled.div`
  font-size: 1.8rem;
  color: ${COLORS_THEME.LIGHT_100};
  height: 50px;
  display: flex;
  position: relative;

  p {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 10px;
    width: 110px;
    font-size: 1.7rem;
    font-weight: 300;
    color: ${COLORS_THEME.LIGHT_400};
  }

  .icon {
    display: flex;
    height: 50px;
    font-size: 2.5rem;
  }

`;
const Title = styled.h1`
color: ${COLORS_THEME.LIGHT_100};
padding:2%;
font-size: 2.8rem;
font-weight: 500;
word-spacing: 2px;

`;

const Textarea = styled.textarea`
  background-color: ${COLORS_THEME.DARK_800};
  padding: 7px;
  width: 96%;
  height: 170px;
`;



export { Container, BackPage, Title, Textarea };