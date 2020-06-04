import React from 'react';
import CollectionOverview from './../../components/collection-overview/collection-overview.comp';
import { Route } from 'react-router-dom';
import Collection from '../collection/collection.comp';

const ShopPage = ({ match }) => {

    return (<div>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>)
}


export default ShopPage;