import UserModel from "../Models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

//register user

export const  registerUser = async(req,res)=>{

    dotenv.config()
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password,salt)
    req.body.password = hashedPass
    const newUser = new UserModel(req.body)
    const {username} = req.body
    try{
        const oldUser = await UserModel.findOne({username})

        if(oldUser){
            return res.status(400).json({message:"username is already registered!"});
        }
        const user = await newUser.save()

        const token = jwt.sign({
            username:user.username, id:user._id
        },process.env.JWT_KEY,{expiresIn:'1h'})
        res.status(200).json({user,token})
    }catch(error) {
        res.status(500).json({message:error.message})
    }
}

//login user

export const loginUser = async (req,res) => {
    const {username,password} = req.body

    try {
        const user = await UserModel.findOne({username:username})

        if(user){
            const validity = await bcrypt.compare(password,user.password)
            // if(!validity)
            // {
            //     res.status(400).json("wrong password")
            //     return
            // }
            // else
            // {
            //     const token = jwt.sign({
            //         username:user.username, id:user._id
            //     },process.env.JWT_KEY,{expiresIn:'1h'})
            //     res.status(200).json({user,token})
            //     return
            // }

            validity? res.status(200).json(user):res.status(400).json("wrong password")
            
        }
        else
            res.status(404).json("user does not exists")
     } catch (error) {
         res.status(500).json("message")
     }
}
