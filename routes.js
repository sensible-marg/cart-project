const express=require("express")
const Customer=require("./models/Customer")
const router=express.Router()

router.get("/customer",
async (req,res)=>{
      const customer= await Customer.find();
      res.send(customer);
})


router.post("/customer",
async (req,res)=>{
  //    const customer= await Customer.find();
    const cust=new Customer({
      custname:req.body.custname,
   custemail:req.body.custemail,
   custmobile:req.body.custmobile,
   custaddress:req.body.custaddress,
   username:req.body.username,
   userpass:req.body.userpass,
   usertype:"user"
    })
   await cust.save();
    res.send(cust)
    //res.send({"msg":"data saved"})
    //res.send({"msg":"data saved"})
  
    res.send(cust);
})

router.get("/customer/:id",
async (req,res)=>{
      try{  
      const customer= await Customer.findOne({_id:req.params.id});
       res.send(customer);
      }
      catch(e)
      {
             res.status(403)
             res.send({"msg":"Invalid Id"})

      }
     
})

router.patch("/customer/:id",
async (req,res)=>{
      try{  
      const customer= await Customer.findOne({_id:req.params.id});

       if(req.body.custname)
       {
      customer.custname=req.body.custname;
       }
       customer.custemail=req.body.custemail;
       customer.custmobile=req.body.custmobile;
       customer.custaddress=req.body.custaddress;
       customer.username=req.body.username;
       customer.userpass=req.body.userpass;

      customer.save()
      res.send({"msg":"data has been updated"})
      
      }
      catch(e)
      {
             res.status(403)
             res.send({"msg":"Invalid Id for update"})

      }
     
})

router.delete("/customer/:id",
async (req,res)=>{
      try{  
      await Customer.deleteOne({_id:req.params.id});
     res.send({"msg":"data has been deleted"})
      
      }
      catch(e)
      {
             res.status(403)
             res.send({"msg":"Invalid Id for update"})

      }
     
})



module.exports=router