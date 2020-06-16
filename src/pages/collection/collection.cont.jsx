import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import WithSpinner from './../../components/with-spinner/with-spinner.comp';
import Collection from './collection.comp';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsLoaded
});

const collectionPageContainer = connect(mapStateToProps)(WithSpinner(Collection));

export default collectionPageContainer;
