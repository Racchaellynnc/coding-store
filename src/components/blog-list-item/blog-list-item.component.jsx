import React from 'react';
import '../../pages/blog/blog.data';
import './blog-list-item.styles.scss';

const BlogItem = ({ blog: { imageUrl, link, price, title, quantity } }) => (
  <div className='blog-item'>
      <img src={require(`../../pages/blog/blog.data${imageUrl}`).default} alt='item' />
        <div className='item-details'> 
          <span className='name'>{title}</span>
          <span className='price'>
            {quantity} x ${price}
          </span> 
      </div>
  </div>
);

export default BlogItem;