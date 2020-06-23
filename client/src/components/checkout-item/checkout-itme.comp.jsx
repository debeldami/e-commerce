import React from 'react';
import './checkout-item.style.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItemFromCart } from '../../redux/user/user.action';
import { addItem } from './../../redux/user/user.action';

const CheckOutItems = ({ cartItem, clearItem, removeItem, addItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='checkout-item' >
            <div className='image-container'>
                <img alt='name' src={imageUrl} />
            </div>
            <span className='name'>
                {name}
            </span>
            <span className='quantity'>
                <div className='arrows' onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrows' onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className='price'>
                {price}
            </span>
            <div className='remove-button' onClick={() => clearItem(cartItem)} >
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItems);

