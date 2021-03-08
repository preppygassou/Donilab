import React from 'react'
import styled from 'styled-components/';
import Cibleparalaximgtop from "./../../assets/svg/cibleparalaximgtop.svg";
import Cibleparalaximgbottom from "./../../assets/svg/cibleparalaximgbottom.svg";
import CibleIcone from "./../../assets/svg/Cibleicone.svg";
import parse from "html-react-parser";




const CibleSection = styled.div `
background-color:#FFFFFF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#2755A1;
text-align:center;
padding:12vh 45vh;
position:relative;

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
}
`;


const CibleparalaxImgtop = styled.img `
position:absolute;
top: 0;
left: 0;
width: 310px;

`;
const CibleparalaxImgbottom = styled.img `
position:absolute;
bottom: 0;
right:0;
width: 125px;

`;
const CibleVisionMissionIcon = styled.img `


`;


function Cibles({program}) {
  return (
    
      <CibleSection>
      <CibleparalaxImgtop src={Cibleparalaximgtop} alt=""/>
        <CibleparalaxImgbottom src={Cibleparalaximgbottom} alt=""/>
        <CibleVisionMissionIcon className="" src={CibleIcone} alt="Historic icon" />
        <h1>
        cibles
       </h1>
        {
          parse(program.acf.les_cibles_du_programmes)
        }
      </CibleSection>
  )
} 

export default Cibles