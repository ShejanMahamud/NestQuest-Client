import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import CheckoutForm from './CheckoutForm';
const Payment = () => {
const [clientSecret,setClientSecret] = useState(null)
const axiosSecure = useAxiosSecure()
const {id} = useParams()
const stripePromise = loadStripe(import.meta.env.VITE_PK);
const {data:property,isPending} = useQuery({
    queryKey: ['payment_property',id],
    queryFn: async () => {
        const {data} = await axiosSecure.get(`/offered/${id}`)
        return data
    }
})

useEffect(()=>{
    const getPayment = async () => {
        const {data} = await axiosSecure.post('/stripe_payment',{price: property?.offer_price})
        setClientSecret(data.clientSecret)
    }
    if(property?.offer_price){
        getPayment()
    }
},[property?.offer_price])

if (isPending) {
    return (
      <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen p-10 flex flex-col items-center justify-center">
         <h1 className="text-2xl text-[#18191C] font-medium mb-10">Pay Property</h1>
                <div className="w-full grid lg:grid-cols-2 grid-cols-1 row-auto items-center gap-20">
                <div className="w-full">
                <Elements stripe={stripePromise}>
                    <CheckoutForm clientSecret={clientSecret} offeredProperty={id}/>
                </Elements>
                </div>
                <div className="w-full">
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Property Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{property?.property_title}</td>
        <td>{property?.offer_price}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Total</th>
        <th className="font-medium">{property?.offer_price}</th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>
                </div>
                </div>
            </div>
  )
}

export default Payment