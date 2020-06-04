import React from 'react';

import './blog-list-item.styles.scss';

const BlogItem = ({ blog: { imageUrl, price, name, quantity } }) => (
  <div className='blog-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default BlogItem;