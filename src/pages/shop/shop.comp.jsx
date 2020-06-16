import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionStart } from './../../redux/shop/shop.action';
import collectionOverviewContainer from '../../components/collection-overview/collcetion-overview.cont';
import collectionPageContainer from './../collection/collection.cont';

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionStart } = this.props
        fetchCollectionStart()
    }

    render() {
        const { match } = this.props

        return (<div>
            <Route exact path={`${match.path}`} component={collectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={collectionPageContainer} />
        </div>)
    }
}

const mapDispatchToProp = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProp)(ShopPage);