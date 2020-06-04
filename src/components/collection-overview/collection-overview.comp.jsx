import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collection-overview.style.scss';
import CollectionPrev from './../prev-collection/collection.comp';
import { selectCollectionsForPreview } from './../../redux/shop/shop.selector';

const CollectionOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {collections.map(({ id, ...collection }) => (<CollectionPrev key={id} {...collection} />))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);
