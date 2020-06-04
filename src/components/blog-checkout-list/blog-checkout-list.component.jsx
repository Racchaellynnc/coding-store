import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromBlog,
  addBlog,
  removeBlog
} from '../../redux/blog-list/blog.actions';

import './blog-checkout-list.scss';

const BlogListCheckout = ({ blogItem, clearItemFromBlog, addBlog, removeBlog }) => {
  const { name, imageUrl, price, quantity } = blogItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeBlog(blogItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addBlog(blogItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItemFromBlog(blogItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearBlog: blog => dispatch(clearItemFromBlog(blog)),
  addBlog: blog => dispatch(addBlog(blog)),
  removeBlog: blog => dispatch(removeBlog(blog))
});

export default connect(
  null,
  mapDispatchToProps
)(BlogListCheckout);