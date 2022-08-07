import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId:{type:String,required:true},
    desc:String,
    likes:[],
    Image:String
},
{
    timestamps:true
}
)

export const postModel = mongoose.model("posts",postSchema)
export default postModel