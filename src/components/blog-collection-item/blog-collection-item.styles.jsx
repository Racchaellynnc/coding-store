import styled from 'styled-components';
import CustomButton from '../buttons/buttons.component';
import {Link} from 'react-router-dom';

export const BlogItemContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  height: 550px;
  align-items: center;
  position: relative;
  transition: 0.2s ease-out;
  &:hover {
    .image {
      width: 102%;
      transition: 0.2s ease-in-out;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
   width: 100%;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const BackgroundImage = styled.div`
  width: 95%;
  height: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  transition: 0.2s ease-in-out;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const BlogFooterContainer = styled.div`
  width: 80%;
  background-color: white;
  margin-top: -20px;
  height: auto;
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  border: .5px solid rgb(197, 197, 197);
`;

export const TitleContainer = styled.span`
  width: 100%;
  text-align: center;
  font-weight: 300;
  margin-bottom: 15px;
`;
export const ExcerptContainer = styled.span`
  width: 100%;
  font-weight: 200;
  font-size: 17px;
  
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
export const BlogPostLink = styled(Link)`
 text-decoration: none;
 color: black;
 display: flex;
 flex-direction: column;
 padding: 12px;
`;
