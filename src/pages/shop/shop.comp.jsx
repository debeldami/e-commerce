import React from 'react';
import CollectionOverview from './../../components/collection-overview/collection-overview.comp';
import { Route } from 'react-router-dom';
import Collection from '../collection/collection.comp';
import { firestore, conversionSelectionSnapShotToMap } from '../../components/firebase/firebase.util';
import { connect } from 'react-redux';
import updateCollections from './../../redux/shop/shop.action';
import WithSpinner from './../../components/with-spinner/with-spinner.comp';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
    state = {
        isLoading: true
    }
    unSubscribeFromSnapshot = null

    componentDidMount() {

        const { updateCollection } = this.props;

        const collectionRef = firestore.collection('collection');

        this.unSubscribeFromSnapshot = collectionRef.onSnapshot(
            async snapshot => {
                const collectionMap = conversionSelectionSnapShotToMap(snapshot);
                updateCollection(collectionMap);
                this.setState({ isLoading: false });
            }
        )
    }


    render() {
        const { match } = this.props
        const { isLoading } = this.state

        return (<div>
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
        </div>)
    }
}

const mapDispatchToProp = dispatch => ({
    updateCollection: (collect) => dispatch(updateCollections(collect))
})

export default connect(null, mapDispatchToProp)(ShopPage);