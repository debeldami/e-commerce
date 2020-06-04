import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GqGcEDrVYuiYgaiaGR7bmyk7l4IfAGwaPZvfPIHHJ8kuCDSvZ1XuzwWPp1ov7oco65VcKtOSIh9jXcQRCfmeunE00Q2kqEOl0'

    const onToken = token => {
        console.log(token)
        alert('payment successfull')
    }

    return (<StripeCheckout
        label='Pay Now'
        name='Dbl Clothing limited'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />)
}

export default StripeCheckoutButton;