import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CheckoutForm = ({clientSecret,offeredProperty}) => {
  const stripe = useStripe();
  const [loading,setLoading] = useState(false)
  const {user} = useAuth()
  const elements = useElements();
  const axiosSecure = useAxiosSecure()

  const handleSubmit = async (event) => {
    setLoading(true)
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    const {paymentIntent,error} = await stripe.confirmCardPayment(clientSecret,{
      payment_method: {
        card: card,
        billing_details:{
          name:user?.displayName,
          email: user?.email
        }
      }
    })
    if(paymentIntent.status === 'succeeded'){

      const {data} = await axiosSecure.patch(`/offered/${offeredProperty}`,{
        status: "Bought",
        tran_id: paymentIntent.id,
      })
      if(data.success){
        toast.success('Payment Success');
        event.target.reset()
        setLoading(false)
      }
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe} className="w-full bg-primary text-white font-medium py-3 rounded-lg mt-5 uppercase flex items-center gap-2 justify-center">
        
{
  loading ? <div className="flex items-center justify-center space-x-2 py-2">
	<div className="w-3 h-3 rounded-full animate-pulse bg-white"></div>
	<div className="w-3 h-3 rounded-full animate-pulse bg-white"></div>
	<div className="w-3 h-3 rounded-full animate-pulse bg-white"></div>
</div>
: 
<span>PAY Via Stripe</span>
}
      </button>
    </form>
  );
};

export default CheckoutForm;
