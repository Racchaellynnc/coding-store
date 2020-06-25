import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const HeaderContainer = styled.div`
  height: 70px;
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
  margin-top: -50px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: -25px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: #222;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;