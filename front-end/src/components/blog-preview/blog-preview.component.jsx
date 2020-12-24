import React from 'react';
import BlogCollectionItem from '../blog-post-item/blog-post-item.component';
import { FadeInUp, SlideInUp } from 'animate-css-styled-components';

import {
	CollectionPreview,
	BlogTitle,
	Preview
} from './blog-preview.styles';

const BlogPreview = ({ category, blogs }) => (
	<CollectionPreview className='collection-preview'>
		<FadeInUp duration="0.8s" delay="0.2s">
			<BlogTitle className='title'>TOP {category.toUpperCase()} POSTS </BlogTitle>
		</FadeInUp>	
		<SlideInUp duration="1.8s" delay="0.7s">
			<Preview className='preview'>
			{blogs
				.filter((blog, idx) => idx < 3)
				.map(blog => (
					<BlogCollectionItem key={blog.id} blog={blog} />
				))}
		</Preview>
		</SlideInUp>
		
	</CollectionPreview>
);
export default BlogPreview;