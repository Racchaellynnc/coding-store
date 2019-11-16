import React from 'react';
import { connect } from  'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';
import CustomButton from '../buttons/buttons.component';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}>
        <span className='name'>{name}</span>
        </div>
     
      <div className='collection-footer'>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch (addItem(item))
});

export default connect(null, mapDispatchToProps) (CollectionItem);