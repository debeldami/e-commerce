import React from 'react';
import './collection-item.style.scss';
import Btn from '../custom-botton/btn.comp';
import { connect } from 'react-redux';
import { addItem } from '../../redux/user/user.action';

const CollectionItems = ({ item, addItem }) => {

    return (
        <div className='collection-item'>
            <div className='image'
                style={{
                    backgroundImage: `url(${item.imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{item.name}</span>
                <span className='price'>${item.price}</span>
            </div>
            <Btn isInverted onClick={() => addItem(item)}>ADD TO CART</Btn>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItems);