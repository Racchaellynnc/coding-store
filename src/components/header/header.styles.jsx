import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const HeaderContainer = styled.div`
  height: 70px;
  margin-top: -0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    padding: 10px;
    margin-bottom: -10px;
    font-size: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  width: 555px;
  padding: 0px;
  margin-top: -120px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: -50px;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: -25px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 300;
  background-color: #385b7aee;
  border: 1px solid #999;
  border-radius: 14pc;
  margin: 5px;
  width: 105px;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  color: #7cff7c;
    :hover{
      background-color: #78EB88;
      color: #385B7A;
    }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;