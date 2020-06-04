import React from 'react';
import './checkout.style.scss';
import { connect } from "react-redux";
import { selectCartItems, selectCartTotal } from './../../redux/user/cart.selectors';
import { createStructuredSelector } from "reselect";
import CheckOutItems from './../../components/checkout-item/checkout-itme.comp';
import StripeCheckoutButton from './../../components/stripe-button/stripe-button.comp';


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
        <div className='test-warning'>
            *PLEASE USE THE FOLLOWING AS TEST CARD*
            <br />
            4242 4242 4242 4242
            <br />
            EXP: Any date above current date - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkoutpage);