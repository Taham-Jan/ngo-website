const mongoose = require('mongoose')
const dotenv = require('dotenv')
require('colors')
const connectDB = require('./config/db')

const donatemodel = require('./model/donateModel')
const donatedata = require('./data/donate-data')
const { default: data } = require('./data/donate-data')

//config dotenv and mongodb conn file

dotenv.config()
connectDB()

//import data

const importData = async () =>{
    try{
    await donatemodel.deleteMany()
    const sampleData = donatedata.map(donate => {return{...donate}})
    await donatemodel.insertMany(sampleData)
    console.log('DATA IMPORTED'.bgCyan)  
    process.exit()  
}
    catch(error){
        console.log(`${error}`.bgRed.white)
        process.exit(1)
    }
}

const dataDestroy = ( ) => {}
if(process.argv[2] === '-d'){
    dataDestroy
}
else{
    importData()
}