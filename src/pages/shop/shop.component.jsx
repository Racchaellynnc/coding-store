import React from 'react';
import {Helmet} from 'react-helmet';
import SHOP_DATA from './shop.data.js';
import Footer from '../../components/footer/footer';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        <Helmet>
            <meta charset="UTF-8" />
            <meta nameName="viewport" content="width=device-width, initial-scale=1" />
            <title>Coderality Clothing</title>
            <meta nameName="description" content="Find the coolest programming t-shirts. We sell shirts in many sizes and colors." />
        </Helmet>
         <div className='shop-container'>
          <div className="shop-text-wrapper">
            <div className="intro-container-2">
                {/* <img src="https://i.postimg.cc/sX7G7qwt/shop-page.png" alt="computer" /> */}
            </div>
         <div className="shop-container">
            <div className="title">
              CODING T-SHIRTS
            </div>
           
            {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
         </div>
         <Footer className="footer"/>
       </div>
       </div>
      </div>
    );
  }
}

export default ShopPage;