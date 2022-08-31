import React,{useState,useEffect} from 'react'

function Signup() {
   const [cname,setCname]=useState("")
   const [cmobile,setCmobile]=useState("")
   const [cemail,setCemail]=useState("")
   const [caddress,setCaddress]=useState("")
   const [username,setUsername]=useState("")
   const [userpass,setUserpass]=useState("")
  const handleCname=(event)=>{
     setCname(event.target.value)
  }
  const handleCmobile=(event)=>{
    setCmobile(event.target.value)
 }
const handleCemail=(event)=>{
  setCemail(event.target.value)
}
const handleCaddress=(event)=>{
  setCaddress(event.target.value)
}
const handleUsername=(event)=>{
  setUsername(event.target.value)
}
const handleUserpass=(event)=>{
  setUserpass(event.target.value)
}

const submitData=()=>{
  if(username=="")
    alert("User name can not be empty")
  else 
   {
    // post data to api
    alert("data has been saved")
   }
}

 
  return (
    <div  >
    <h1>New Sign Up Form</h1>  
      <form className="card p-3 m-3">
      <div className="mb-3">
    <label for="txtName" className="form-label">Enter your name</label>
    <input type="text" className="form-control" id="txtName" value={cname} onChange={handleCname} />
  </div>

  <div className="mb-3">
    <label for="txtMobile" className="form-label">Enter your mobile no</label>
    <input type="text" className="form-control" id="txtMobile" value={cmobile} onChange={handleCmobile} />
  </div>

  <div className="mb-3">
    <label for="txtEmail" className="form-label">Enter your Email Id</label>
    <input type="text" className="form-control" id="txtEmail" value={cemail} onChange={handleCemail} />
  </div>

  <div className="mb-3">
    <label for="txtAddress" className="form-label">Enter your Address</label>
    <textarea  className="form-control" id="txtAddress" value={caddress} onChange={handleCaddress} />
  </div>

  <div className="mb-3">
    <label for="txtUser" className="form-label">Enter User Name</label>
    <input type="text" className="form-control" id="txtUser" value={username} onChange={handleUsername} />
  </div>
  <div className="mb-3">
    <label for="txtPass" className="form-label">Enter your password</label>
    <input type="password" className="form-control" id="txtPass" value={userpass} onChange={handleUserpass} />
  </div>

  <button type="button" className="btn btn-primary" onClick={submitData}>Submit</button>
</form>




    </div>
  )
}

export default Signup