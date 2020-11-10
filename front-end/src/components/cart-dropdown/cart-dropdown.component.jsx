import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../buttons/buttons.component';
import CartItem from '../cart-item/cart-item.component';
import { CartItems, Empty, DropDown } from './cart-dropdown.styles';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'; 
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

const CartDropdown = ({ cartItems, history, dispatch }) => (
		<DropDown className='cart-dropdown'>
			<CartItems className='cart-items'>
				{
					cartItems.length ?
					cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
				: <Empty className="empty">Your cart is empty</Empty>
				}
			</CartItems>
			<CustomButton onClick={()=> {
				history.push('./checkout');
				dispatch(toggleCartHidden());
				}}>
					CHECKOUT</CustomButton>
		</DropDown>
	);	
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));