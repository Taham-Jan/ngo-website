import React from 'react'
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch, useSelector} from 'react-redux'
import { placeDonation } from '../Actions/recieveDonationAction'
import Loader from './Loader'
import Error from './Error'
import Success from './Success'

const Checkout = ({amount}) => {
  const paymentstate = useSelector(state => state.placeDonation)
  const {loading,error,success} = paymentstate
  const dispatch = useDispatch()
  const tokenHandler = (token) => {
    dispatch(placeDonation(token,amount))
    console.log(token) 
        }
  return (
    <>
    {
      loading && <Loader/>
    }
    {
      error && <Error error='Something Went Wrong'/>
    }
    {
      success && <Success success='Donation Successfull'/>
    }
    
      <StripeCheckout
      amount={amount * 100}
      name
      zipCode
      token={tokenHandler}
      stripeKey='pk_test_51MPmKNGvbXw3wCHJZhqtFvSIhwhtn73348B4pRjJpeeai2ZxXtvbCEfH9vHPweCXf8rsruzCUdcUYJfiYSbszwui00FAkUkVOP'
      currency='PKR'
      >
        <Button variant="success">Donate Now</Button>
      </StripeCheckout>
      </>
  )
}

export default Checkout
