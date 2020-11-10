import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  	const { title, items } = collection;
  	return (
		<div className='collection-page'>
		{/* <Helmet>
            <title>Coderality Clothing</title>
            <meta name="description" content="Find the coolest programming t-shirts. We sell shirts in many sizes and colors." />
        </Helmet> */}
	  		<h2 className='title'>{title}</h2>
	  		<div className='items'>
				{items.map(item => (
		  			<CollectionItem key={item.id} item={item} />
				))}
	  		</div>
		</div>
  	);
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);