import React from 'react';
import { connect } from 'react-redux';
import { addBlog } from '../../redux/blog-list/blog.actions';

import {
  BlogItemContainer,
  BlogFooterContainer,
  BackgroundImage,
  NameContainer,
} from './blog-collection-item.styles';

const BlogCollectionItem = ({ blog}) => {
  const { name, imageUrl } = blog;

  return (
    <BlogItemContainer classname="container-item">
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <BlogFooterContainer>
        <NameContainer>{name}</NameContainer>
      </BlogFooterContainer>
    </BlogItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addBlog: blog => dispatch(addBlog(blog))
});

export default connect(
  null,
  mapDispatchToProps
)(BlogCollectionItem);