const mongoose = require("mongoose")

const Order = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    book:{
        type:mongoose.Types.ObjectId,
        ref:"books"
    },
    status:{
        type:mongoose.Types.ObjectId,
        default:"Order Placed",
        enum:["Order Placed","Out for Delivery","Delivered","Cancelled"]
    }
},{
    timestamps:true
})

module.exports = mongoose.model("orders",Order)