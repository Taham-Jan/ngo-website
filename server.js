
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');;
const path = require('path')

const app = express();

app.use(express.json())


//  app.get("/", (req, res) => {
//     res.json({ message: "API running..." });
//   });

app.use(express.urlencoded({extended:false}))
app.use('/api/donates', require('./routes/donateRoutes'))
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/payment', require('./routes/paymentRoutes'))
app.use(errorHandler)
app.use(express.static(path.join(__dirname,'./ngoweb/build')));
app.get('*',(req,res) => {
  res.sendFile(path.resolve(__dirname,"ngoweb","build","index.html"))
})

const port = process.env.PORT || 5000;
connectDB()

app.listen(port, () => console.log(`Server started on port ${port}`));