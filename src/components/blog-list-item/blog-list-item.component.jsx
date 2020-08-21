// import React from 'react';
// import '../../pages/blog/blog.data';
// import {BlogItem} from './blog-list-item.styles.jsx';

// const BlogItem = ({ blog: { imageUrl, link, price, title, quantity } }) => (
// 	<BlogItem className='blog-item'>
// 		<Helmet>
// 			<meta charset="UTF-8" />
// 			<meta name="viewport" content="width=device-width, initial-scale=1" />
// 			<title>Coderality Blog</title>
// 			<meta name="description" content="We post blogs about AWS, React Native, TypeScript, JavaScript, and Mobile Development. " />	
// 		</Helmet>
// 		<img src={require(`../../pages/blog/blog.data${imageUrl}`).default} alt='item' />
// 		<div className='item-details'> 
// 			<span className='name'>{title}</span>
// 			<span className='price'>
// 				{quantity} x ${price}
// 			</span> 
// 		</div>
// 	</BlogItem>
// );

// export default BlogItem;