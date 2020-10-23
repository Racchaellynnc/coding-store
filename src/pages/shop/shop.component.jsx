import React from 'react';
import { Route } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import SHOP_DATA from './shop.data.js';
import Footer from '../../components/footer/footer';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }


  render() {
    const { match } = this.props;

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
            <Route
              exact
              path={`${match.path}`}
              component={CollectionsOverviewContainer}
            />
            <Route
              path={`${match.path}/:collectionId`}
              component={CollectionPageContainer}
            />
         </div>
         <Footer className="footer"/>
       </div>
       </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);