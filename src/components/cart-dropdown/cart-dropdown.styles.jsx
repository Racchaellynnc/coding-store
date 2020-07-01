import styled from 'styled-components';

export const CartDropDown = styled.div`
.cart-dropdown {
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;   
    border-radius: 4px;
    box-shadow: 0px 27px 77px 7px rgba(99, 0, 99, 0.27);
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    
    .empty {
      font-size: 20px;
      margin: auto;
    }s
    .cart-items {
      height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
    }
    button {
        margin-top: auto;
        background-color: #7df48a;
        color: black;
      }
    }
    @media screen and (max-width: 800px){
            width: 200px;  
    }
`;