import React from 'react';
import CustomButton from '../buttons/buttons.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BlogItem from '../blog-list-item/blog-list-item.component';
import { selectBlogItems } from '../../redux/blog-list/blog.selectors';
import { createStructuredSelector } from 'reselect'; 
import { toggleBlogHidden } from '../../redux/blog-list/blog.actions.js';
import './blog-dropdown.styles.scss';

const BlogDropdown = ({ blogItems, history, dispatch }) => (
    <div className='blog-dropdown'>
      <div className='blog-items'>
        {
          blogItems.length ?
          blogItems.map(blogItem => (
          <BlogItem key={blogItem.id} blog={blogItem} />
        ))
        : <span className="empty">Your Reading List is empty.</span>
        }
      </div>
      <CustomButton onClick={()=> {
        history.push('./blog-list');
        dispatch(toggleBlogHidden());
        }}>
          CHECKOUT</CustomButton>
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    blogItems: selectBlogItems
  });

  export default withRouter(connect(mapStateToProps)(BlogDropdown));
