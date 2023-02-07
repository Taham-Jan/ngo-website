const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "order name required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    number: {
        type: String,
        
      },
    userid: {
      type: String,
      //required:true,
    },
    donateCategory:[],

    Amount: {
      type: String,
        // required: true,
    },
    transactionId: {
      type: String,
        //required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("payment", paymentSchema);