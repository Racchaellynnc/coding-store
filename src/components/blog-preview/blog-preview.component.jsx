import React from 'react';
import BlogCollectionItem from '../blog-post-item/blog-post-item.component';

import {
	CollectionPreview
} from './blog-preview.styles';

const BlogPreview = ({ category, blogs }) => (
	<CollectionPreview className='collection-preview'>	
		<h1 className='title'>TOP {category.toUpperCase()} POSTS </h1>
		<div className='preview'>
			{blogs
				.filter((blog, idx) => idx < 3)
				.map(blog => (
					<BlogCollectionItem key={blog.id} blog={blog} />
				))}
		</div>
	</CollectionPreview>
);
export default BlogPreview;