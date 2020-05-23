import React from 'react';
import CollectionPrev from '../../components/prev-collection/collection.comp'
import SHOP_DATA from './shop.data';


class ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;

        return (<div>
            {collections.map(({ id, ...collection }) => (<CollectionPrev key={id} {...collection} />))}
        </div>)
    }
}

export default ShopPage;