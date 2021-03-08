import React from 'react'
import PartnersImg from './../../assets/svg/partnersSvgProgram.svg'
import styled from 'styled-components/';
import Objectifssvg from "./../../assets/svg/objectifssvg.svg";
import LogoBene from "./../../assets/logo_doctix.png";


const BeneficiairesSections = styled.section`
  background-color:#2755A1;
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



const BeneficiairesLogoContent = styled.div`

h1{
  color:#fff;
}
`;
const BeneficiairesLogoCard = styled.div`
width:120px;
height:120px;
background-color:#fff;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
margin:1rem;
`;
const BeneficiairesLogoCards = styled.div`
display:flex;
align-items:center;
`;
const BeneficiairesLogo = styled.img`
width:100px;
border-radius:50%;

`;
const CibleVisionMissionIcon = styled.img`

`;

const BeneficiairesTitle = styled.h1`
color:#fff;
`;

function Beneficiaires({program}) {
  return (
    <BeneficiairesSections>
        <CibleVisionMissionIcon className="" src={PartnersImg} alt="Historic icon" />
        <BeneficiairesTitle >
        BÉNÉFICIAiRES DU PROGRAMME
       </BeneficiairesTitle >
       <BeneficiairesLogoContent>
         <h1>1er édition</h1>

         <BeneficiairesLogoCards>
           {
             program.acf.information_du_beneficiare.map((beneficiaires,index)=>(
              <BeneficiairesLogoCard key={index}>
              <BeneficiairesLogo src={beneficiaires.logo_de_lentreprise_beneficiaire.url}/>
              </BeneficiairesLogoCard>
             ))
           }
         </BeneficiairesLogoCards>
       </BeneficiairesLogoContent>
      
    </BeneficiairesSections>
  )
}

export default Beneficiaires