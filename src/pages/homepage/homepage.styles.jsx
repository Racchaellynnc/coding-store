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