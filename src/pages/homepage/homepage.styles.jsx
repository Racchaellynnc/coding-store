import styled from 'styled-components'
import CustomButton from '../../components/buttons/buttons.component';

export const LearnButton = styled(CustomButton)`
  width: 40%;
  font-weight: 400;
  background-color: #78eb88;
  margin: auto;
  margin-bottom: 30px;
  @media screen and (max-width: 650px) {
    display: block;
    opacity: 0.9;
    margin-bottom: 20px;
  }
`;
export const OptionsBox = styled.div`
    margin-top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90%;
    border-radius: 4px;
    transition: all 0.8s ease;
    margin: auto;
    justify-content: center;
    margin-bottom: 88px;
  @media screen and (max-width: 800px) { 
       flex-direction: column;
       margin: auto;
       justify-content: center;
    } 
    .options{
        margin: 15px;
        margin-bottom: 40px;
      }
      .option-description{  
        padding: 15px;
      }
 }
`;