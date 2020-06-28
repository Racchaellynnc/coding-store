import styled from 'styled-components';
import CustomButton from '../buttons/buttons.component';

export const CollectionItemContainer = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #999;
  background-color: rgba(226, 226, 226, 0.74);
  margin: 10px;
  flex-direction: column;
  height: 450px;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 650px) {
   margin: 0px;
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
  width: 50%;
  font-weight: 400;
  margin: 20px;
  @media screen and (max-width: 650px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  margin-bottom: 0px;
  display: flex;
  color: #333;
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