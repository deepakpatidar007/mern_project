import React from 'react'
import { PostData } from '../../Data/PostsData'
import Post from '../Post/Post'

import "./Posts.css";

const Posts = () => {
  return (
    <div className="posts">
        {PostData.map((post,id)=>{
            return <Post data={post} />
        })}
    </div>
  )
}

export default Posts