import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionStart } from './../../redux/shop/shop.action';
import Spinner from '../../components/spinner/spinner.component';

const collectionOverviewContainer = lazy(() => import('../../components/collection-overview/collcetion-overview.cont'))

const collectionPageContainer = lazy(() => import('./../collection/collection.cont'))


const ShopPage = ({ fetchCollectionStart, match }) => {

    useEffect(() => {
        fetchCollectionStart()
    }, [fetchCollectionStart])


    return (<div>
        <Suspense fallback={<Spinner />}>
            <Route exact path={`${match.path}`} component={collectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={collectionPageContainer} />
        </Suspense>
    </div>)

}

const mapDispatchToProp = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProp)(ShopPage);