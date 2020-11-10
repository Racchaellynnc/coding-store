import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price ; 
    const publishableKey = 'pk_live_1QI7zAWNv1VXkOqyRUL7p6ZU00V6KfcdQi';


const onToken = token => {
    axios({
        url: 'payment',
        method: 'post',
        data: {
          amount: priceForStripe,
          token: token
        }
      })
        .then(response => {
          alert('succesful payment');
        })
        .catch(error => {
          console.log('Payment Error: ', error);
          alert(
            'There was an issue with your payment! Please make sure you use the provided credit card.'
          );
        });
    };

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
        stripeKey={publishableKey}
        />
    );
};
export default StripeCheckoutButton;