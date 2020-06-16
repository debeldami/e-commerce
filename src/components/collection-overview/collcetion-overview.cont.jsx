import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFecthing } from './../../redux/shop/shop.selector';
import WithSpinner from './../with-spinner/with-spinner.comp';
import CollectionOverview from './collection-overview.comp';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFecthing
})

const collectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default collectionOverviewContainer;