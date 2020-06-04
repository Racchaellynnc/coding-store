import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BlogListCheckout from '../../components/blog-checkout-list/blog-checkout-list.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  selectBlogItems,
  selectBlogTotal
} from '../../redux/blog-list/blog.selectors';

import './blog-reading-list.scss';

const BlogListPage = ({ blogItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {blogItems.map(blogItem => (
      <BlogListCheckout key={blogItem.id} blogItem={blogItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
    <div className='test-warning'>

    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  blogItems: selectBlogItems,
  total: selectBlogTotal
});

export default connect(mapStateToProps)(BlogListPage);
