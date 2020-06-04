import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BlogPreview from '../collection-preview/blog-preview.component';

import { selectBlogCollectionsForPreview } from '../../redux/blog/blog.selectors';

import './collections.styles.scss';

const BlogOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <BlogPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectBlogCollectionsForPreview
});

export default connect(mapStateToProps)(BlogOverview);