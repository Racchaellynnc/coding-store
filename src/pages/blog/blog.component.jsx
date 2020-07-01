import React from 'react';
import './blog.styles.scss';
import BLOG_DATA from './blog.data.js';
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
        {collections.map(({ id, ...otherCollectionProps }) => (
          <BlogPreview key={id} {...otherCollectionProps} />
        ))}
        <div className="test-warning">
            Our blog is Under Construction at the moment. Thank you for your patience.
        </div>
      </div>
    );
  }
}

export default BlogPage;