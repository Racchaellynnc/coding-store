import React from 'react';
import { connect } from 'react-redux';
import { selectBlogItemsCount } from '../../redux/blog-list/blog.selectors';
import { toggleBlogHidden } from '../../redux/blog-list/blog.actions';
import { createStructuredSelector } from 'reselect'; 
import { ReactComponent as BookIcon } from '../../assets/book-open-light.svg'

import './blog-icon.styles.scss';

const BlogIcon = ({ toggleBlogHidden, itemCount }) => (
<div>
    <div className='book-icon' onClick={toggleBlogHidden}>
      <BookIcon className='shopping-icon' />
    </div>
    <span className='item-count'>({itemCount})</span>
</div>
  );
  
  const mapDispatchToProps = dispatch => ({
    toggleBlogHidden: () => dispatch(toggleBlogHidden())
  });

  const mapStateToProps = createStructuredSelector({
    itemCount: selectBlogItemsCount
    
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BlogIcon);