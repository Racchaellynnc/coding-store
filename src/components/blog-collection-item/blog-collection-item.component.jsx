import React from 'react';
import { connect } from 'react-redux';
import { addBlog } from '../../redux/blog-list/blog.actions';

import {
	BlogItemContainer,
	BlogFooterContainer,
	BackgroundImage,
	TitleContainer,
	BlogPostLink,
	ExcerptContainer
} from './blog-collection-item.styles';

const BlogCollectionItem = ({ blog}) => {
	const { title, imageUrl, link, excerpt } = blog;

	return (
		<BlogItemContainer className="container-item">
			<BackgroundImage className='image' imageUrl={imageUrl} />
			<BlogFooterContainer>
				<BlogPostLink className="blog-post-link" to={link}>
					<TitleContainer>{title}</TitleContainer>
					<ExcerptContainer>{excerpt}</ExcerptContainer>
				</BlogPostLink>
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