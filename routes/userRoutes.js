const express = require('express')
const router = express.Router()
const User = require('../model/userModel')
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

router.get('/getallusers',async (req,res)=>{
 try{
   const users =await User.find({})
  res.status(200).send(users)
}catch(error){
  res.status(404).json({message:error.stack})
}
})

router.post('/deleteuser',async (req,res)=>{
  const userid = req.body.userid
  try{
  await User.findOneAndDelete({_id:userid})
   res.status(200).send("User Deleted")
 }catch(error){
   res.status(404).json({message:error.stack})
 }
 })


module.exports = router