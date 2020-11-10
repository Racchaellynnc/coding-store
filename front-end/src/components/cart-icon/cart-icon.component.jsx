import React from 'react';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect'; 
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingicon.svg'
import { Icon, ShopIcon, ItemCount } from './cart-icon';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <Icon className='cart-icon' onClick={toggleCartHidden}>
		<ShopIcon><ShoppingIcon className='shopping-icon' /></ShopIcon>
      	
      	<ItemCount className='item-count'>{itemCount}</ItemCount>
    	</Icon>
  	); 
const mapDispatchToProps = dispatch => ({
    	toggleCartHidden: () => dispatch(toggleCartHidden())
	});

const mapStateToProps = createStructuredSelector({
    	itemCount: selectCartItemsCount 
	});
  
export default connect(
    	mapStateToProps,
    	mapDispatchToProps
  	)(CartIcon);