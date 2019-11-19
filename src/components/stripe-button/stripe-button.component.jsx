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
        image = 'https://previews.dropbox.com/p/thumb/AAnIDNOXCwXAZN3TSZffTkAhbQ6qJx_uSh1FBiC_iBnJFU0gEeNIiueD3uiNYDm2TAFvYnm38AlkZTUQH2ihXNRdU-JdfQpgDMVs9eRPZfWHytp_e6aTIKYBbo1RRUTUf_hWhCxpHRdg0KRPMD7ivAZ7hgD3fYBVtkE6xOeLWn9avxDaJVAV29OCTXovley7NGqyR0BRaS4mfRnYn-Eqm40ayTOXBgZugj7n1O72Yv-aE2u6LMfV08U4oH-_xVncfEyG5h7DV_ooDp7xf-TEwL90WcOCr4s6E8OkpWR0mADJIeTZ8sRn3_pzD_45REIaKayN4RahTYkcZs_XGgLJ83zDW-UJIYzbtcbpB8aINAxVmw/p.png?fv_content=true&size_mode=5'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panaelLabel= 'Pay Now'
        token={onToken}
        stripeKey={PublishableKey}
        />
    );
};
export default StripeCheckoutButton;