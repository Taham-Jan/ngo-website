const express = require('express')
const router = express.Router()
const {getAllDonate,getDonateById,addNewDonate,updateDonateById,deleteDonateById}= require('../controllers/donateController')

//const { protect } = require('../middleware/authMiddleware')

// router.get('/getDonate', async (req,res)=>{
//     try {
//         const donate = await donateModel.find({})
//         res.send(donate)
        
//     } catch (error) {
//         res.json({message:error})
//     }
// })
// 


router.post('/updatedonates',updateDonateById)
router.post('/deletedonates',deleteDonateById)
router.post('/adddonates',addNewDonate)
router.get('/alldonates', getAllDonate)
router.get('/alldonates/:id', getDonateById)

module.exports = router 