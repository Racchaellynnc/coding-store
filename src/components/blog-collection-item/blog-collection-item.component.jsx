import React from 'react';
import { connect } from 'react-redux';
import { addBlog } from '../../redux/blog-list/blog.actions';

import {
  BlogItemContainer,
  BlogFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './blog-collection-item.styles';

const BlogCollectionItem = ({ blog, addBlog }) => {
  const { name, price, imageUrl } = blog;

  return (
    <BlogItemContainer classname="container-item">
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <BlogFooterContainer>
        <NameContainer>{name}</NameContainer>
      </BlogFooterContainer>
      
      {/* <AddButton onClick={() => addBlog(blog)} inverted>
        Add to Reading List
      </AddButton> */}
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