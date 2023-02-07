const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51MPmKNGvbXw3wCHJxbrrF8PTZfdOurHYpaH5UZIqum5mtSkXcLTenZQrbRt4c5OBQAJFTbShSUdc5TnAbs9LUyz8008WT0gv25')
const Payment = require('../model/paymentModel')


router.post('/placedonation', async (req,res)=>{
    const {token,amount,user,donateItems} = req.body
 try {
  
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
            {
              amount: amount * 100,
              currency: "pkr",
              customer: customer.id,
              receipt_email: token.email,
            },
            {
              idempotencyKey: uuidv4(),
            }
          )
          if(payment){
            const newDonation = new Payment({
              name:user.name,
              email:user.email,
              number:user.number,
              userid:user._id,
              donateCategory:donateItems,
              Amount:amount,
              transactionId:payment.source.id
            })
            newDonation.save()
            res.send('Payment Success')
          }
          else{
            res.send('Payment Failed')
          }
    } catch (error) {
        res.status(400).json({
            message: 'Something Went Wrong',
            error:error.stack
        })
    }
})
router.post('/getuserdonations', async (req,res) => {
  const {userid} = req.body
  try {
    const donations = await Payment.find({userid}).sort({_id:'-1'})
    res.status(200).send(donations)
  } catch (error) {
    res.status(400).json({
      message: 'Something Went Wrong',
      error:error.stack
    })
  }
})

router.get('/getalldonations', async (req,res) => {
  //const {userid} = req.body
  try {
    const donations = await Payment.find({})
    res.status(200).send(donations)
  } catch (error) {
    res.status(400).json({
      message: 'Something Went Wrong',
      error:error.stack
    })
  }
})

module.exports = router; 