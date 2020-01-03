import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../buttons/buttons.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'; 
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import './cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ?
          cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        : <span className="empty">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={()=> {
        history.push('./checkout');
        dispatch(toggleCartHidden());
        }}>
          CHECKOUT</CustomButton>
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
  });

  export default withRouter(connect(mapStateToProps)(CartDropdown));