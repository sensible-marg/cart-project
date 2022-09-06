const mongoose=require("mongoose")

const custSchema=mongoose.Schema({
   custname:String,
   custemail:String,
   custmobile:String,
   custaddress:String,
   username:String,
   userpass:String,
   usertype:String
})
module.exports=mongoose.model("customer_master",custSchema)
