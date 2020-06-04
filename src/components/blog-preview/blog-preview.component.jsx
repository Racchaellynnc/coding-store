import React from 'react';

import BlogItem from '../blog-collection-item/blog-collection-item.component';

import './blog-preview.styles.jsx';


const BlogPreview = ({ title, blogs }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {blogs
        .filter((blog, idx) => idx < 4)
        .map(blog => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
    </div>
  </div>
);
export default BlogPreview;