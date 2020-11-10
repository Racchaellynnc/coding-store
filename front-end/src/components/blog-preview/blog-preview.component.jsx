import React from 'react';
import BlogCollectionItem from '../blog-post-item/blog-post-item.component';

import {
	CollectionPreview,
	BlogTitle,
	Preview
} from './blog-preview.styles';

const BlogPreview = ({ category, blogs }) => (
	<CollectionPreview className='collection-preview'>	
		<BlogTitle className='title'>TOP {category.toUpperCase()} POSTS </BlogTitle>
		<Preview className='preview'>
			{blogs
				.filter((blog, idx) => idx < 3)
				.map(blog => (
					<BlogCollectionItem key={blog.id} blog={blog} />
				))}
		</Preview>
	</CollectionPreview>
);
export default BlogPreview;