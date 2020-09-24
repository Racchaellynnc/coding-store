import React from 'react';
import '../../pages/blog/blog.data';
import '../../components/blog-preview/blog-preview.styles.jsx';

import {
	CollectionPreview
} from '../blog-preview/blog-preview.styles';

const CategoryFilter = ({ category, props }) => (	
	<CollectionPreview className='collection-preview'>	
	    <div className="blog-category-container">
			<div className="blog-categories">
				<div className="cat">
                    
				</div>
			</div>
		</div>
	</CollectionPreview>
);
export default CategoryFilter;