import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; 
    const PublishableKey = 'pk_test_jcA6vVNP59qq2BznvKFkmF4E00jAgjeudt';


const onToken = token => {
    console.log(token);
    alert('Payment Successful!');
}

    return (
        <StripeCheckout 
        label = 'Pay Now'
        name = "Coderality"
        billingAddress
        shippingAddress
        image = 'https://i.postimg.cc/Hx5Gsyyy/9Led7TbA.png'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel= 'Pay Now'
        token={onToken}
        stripeKey={PublishableKey}
        />
    );
};
export default StripeCheckoutButton;