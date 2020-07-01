import React from 'react';
import '../../pages/blog/blog.data';
import {BlogItem} from './blog-list-item.styles.jsx';

const BlogItem = ({ blog: { imageUrl, link, price, title, quantity } }) => (
	<BlogItem className='blog-item'>
			<img src={require(`../../pages/blog/blog.data${imageUrl}`).default} alt='item' />
			<div className='item-details'> 
				<span className='name'>{title}</span>
				<span className='price'>
					{quantity} x ${price}
				</span> 
			</div>
	</BlogItem>
);

export default BlogItem;