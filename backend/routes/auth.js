import express from 'express'
import User from '../model/user.js'
import bcrypt from 'bcrypt'
const Router=express.Router()
import jwt from 'jsonwebtoken'

Router.post("/signup", async(req,res)=>{
try {
     const {name, email, password}=req.body
    if (!name || !email || !password) {
  return res.status(400).json({ message: "All fields are required" });
}
   
    const user=await User.findOne({email})
   if (user) {
  return res.status(409).json({ message: "User already exists" })
}
    const hashpassword=await bcrypt.hash(password,10)
    const newUser=new User({
        name,
        email,
        password:hashpassword
    })
    await newUser.save()
    return res.status(201).json({success:true,message:"user registered successfully, you can login now"})

} catch (error) {
  console.error("Error while registering new user:", error);
  return res.status(500).json({
    success: false,
    message: "Server error while registering user"
  });
}

})
Router.post("/login", async(req,res)=>{
try {
     const {email, password}=req.body
    if (!email || !password) {
  return res.status(400).json({ message: "All fields are required" });
}
   
    const user=await User.findOne({email})
   if (!user) {
  return res.status(409).json({ message: "User not existed" })
}
  const checkpassword = await bcrypt.compare(password, user.password)
if (!checkpassword) {
  return res.status(401).json({ message: "Incorrect password" })
}

const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "7h" }
);

return res.status(200).json({
  success: true,
  token,
  user: { name: user.name },
  message: "Login successfully"
});


} catch (error) {
  console.error("Error while login user:", error);
  return res.status(500).json({
    success: false,
    message: "Server error while login user"
  });
}

})
export default Router