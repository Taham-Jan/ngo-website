import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Checkout from '../components/Checkout';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './payment.css'
const Payment = () => {
    const paymentState = useSelector(state=> state.selectedDnte)
    const donateItems = paymentState.donateItems
  return (
    <>
<Navbar/>
{/* <Container>
<h1>SELECTED CATEGORY</h1>
{donateItems.map((item)=>(
    <h1>{item.name}
<br/>     {item.program}
<br/>AMOUNT:{item.amount}
<Checkout amount={item.amount} /></h1>
))}

</Container> */}

<br/>
<br/>
<center>
      <div className='donatedetailsbody'>

        {donateItems.map((item)=>(
      <div class="wrapper">
        <div class="inner" >
          
          <form action="">
            <h3>YOUR DONATION PAYMENT PAGE</h3>
 
            <div class="form-wrapper">
                <label for="">Name Of Your Selected Category</label>
                <h4 className='form-control'>{item.name}</h4>
              </div>

    
            <div class="form-wrapper">
              <label for="">Your Selected Program</label>
              <h4 className='form-control'>{item.program}</h4>

            </div>
            <div class="form-wrapper">
              <label for="">Your Donation Amount</label>
              <h4 className='form-control'>{item.amount}</h4>
            </div>
           
            <Checkout amount={item.amount} />
          </form>
        </div>
      </div>
))}


    </div>
    </center>
<Footer/>
</>
  )
}

export default Payment
