import React from 'react';
import BlogItem from '../blog-collection-item/blog-collection-item.component';
import './blog-preview.styles.jsx';
import {
  CollectionPreview
} from './blog-preview.styles';

const BlogPreview = ({ category, blogs }) => (
  <CollectionPreview className='collection-preview'>
    <h1 className='title'>{category.toUpperCase()}</h1>
    <div className='preview'>
      {blogs
        .filter((blog, idx) => idx < 3)
        .map(blog => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
    </div>
  </CollectionPreview>
);
export default BlogPreview;