import React from 'react';
import './blog.styles.scss';
import BLOG_DATA from './blog.data.js';
import {Helmet} from 'react-helmet';
import  Footer from '../../components/footer/footer';
import BlogPreview from '../../components/blog-preview/blog-preview.component';
class BlogPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: BLOG_DATA
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<div className='shop-page'>
				<Helmet>
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<title>Coderality Blog</title>
					<meta name="description" content="We post blogs about AWS, React Native, TypeScript, JavaScript, and Mobile Development. " />	
				</Helmet>
				<div className="blog-container"></div>
				<div className="blog-category-container">
					<div className="blog-categories">
						<div className="cat">
						</div>
					</div>
				</div>
				{collections.map(({ id, ...otherCollectionProps }) => (
				<BlogPreview key={id} {...otherCollectionProps} />
				))}
				<div className="test-warning">
					Our blog is Under Construction at the moment. Thank you for your patience.
				</div>
				<Footer className="footer"/>
			</div>
		);
	}
}

export default BlogPage;