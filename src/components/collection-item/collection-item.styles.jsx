import styled from 'styled-components';
import CustomButton from '../buttons/buttons.component';

export const CollectionItemContainer = styled.div`
  width: 100%;
  display: flex;
  border: .2px solid #999;
  margin: 10px;
  flex-direction: column;
  height: 450px;
  align-items: center;
  background-color: rgba(220, 255, 220, 0.9);
  position: relative;

    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 650px) {
   margin: auto;
   margin-bottom: 20px;
   width: 100%;
    &:hover {
      .image {
        opacity: 0.8;
      }
      button {
        transition: transform 2s ease;
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 40%;
  font-weight: 400;
  margin: 20px;
  @media screen and (max-width: 650px) {
    display: block;
    opacity: 0.9;
    margin-bottom: 20px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid: #999 !important;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 80%;
  margin-top: -40px;
  display: flex;
  color: #333;
  background-color: white;
  border: .2px solid #999;
  justify-content: space-between;
  font-size: 22px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  margin-right: 15px;
  margin-top: 15px;
  text-align: right;
`;