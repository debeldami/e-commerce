import React from 'react';
import './checkout.style.scss';
import { connect } from "react-redux";
import { selectCartItems, selectCartTotal } from './../../redux/user/cart.selectors';
import { createStructuredSelector } from "reselect";
import CheckOutItems from './../../components/checkout-item/checkout-itme.comp';

const Checkoutpage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>
                    Product
                </span>
            </div>
            <div className='header-block'>
                <span>
                    Description
                </span>
            </div>
            <div className='header-block'>
                <span>
                    Quantity
                </span>
            </div>
            <div className='header-block'>
                <span>
                    Price
                </span>
            </div>
            <div className='header-block'>
                <span>
                    Remove
                </span>
            </div>
        </div>
        {
            cartItems.map(item => <CheckOutItems key={item.id} cartItem={item} />)
        }

        <div className='total'>
            <span> Total ${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkoutpage);