const Donate = require("../model/donateModel")

const getAllDonate = async (req,res) => {
    try {
        const donates = await Donate.find({})
        res.send(donates);
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Server Error"})
    }
}
   
const addNewDonate = async (req,res) => {
    const newitem = req.body.newitem
    try {
const newDonation = new Donate({
    name:newitem.name,
    programs:newitem.programs,
    image:newitem.image,
    description:newitem.description
})
await newDonation.save()
res.status(201).send('New Donation Category Added')
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Server Error"})
    }
}
   

const getDonateById = async (req,res) => {
       
        try {
            const donate = await Donate.findById(req.params.id)
            res.json(donate) 
        } catch (error) {
            console.error(error)
            res.status(500).json({message:"Server Error"})
        }
}

const updateDonateById = async (req,res) => {
const updateditem = req.body.updateditem
try {
// const donate=await Donate.findOne({_id:updateditem._id})
const donate = await Donate.findOne({_id:updateditem._id});

(donate.name=updateditem.name),
(donate.programs=updateditem.programs),
(donate.image=updateditem.image),
(donate.description=updateditem.description),

await donate.save()
res.status(200).send('Category Update Success')

// res.json(donate)
} catch (error) {
    res.status(400).json({message:error})
}
}
 
const deleteDonateById = async (req, res) => {
    const donateId = req.body.id;
    try {
      await Donate.findOneAndDelete({ _id: donateId });
      res.status(200).send("Donation Category Deleted");
    } catch (error) {
      res.status(404).json({ message: error });
    }
}
  


module.exports={
    getAllDonate,
    addNewDonate,
    getDonateById,
    updateDonateById,
    deleteDonateById,
}