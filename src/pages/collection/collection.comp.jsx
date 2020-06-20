import React from 'react';
import CollectionItems from '../../components/item-collection/collection-item.comp';
import './collection.style.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

const Collection = ({ collection }) => (
    <div className='collection-page'>
        <h2 className='title'>{collection.title}</h2>
        <div className='items'>
            {collection.items.map(item => <CollectionItems key={item.id} item={item} />)}
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);
