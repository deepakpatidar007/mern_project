import React from 'react'
import Post from '../Post/Post'
//import {PostData} from '../../Data/PostsData'
import "./Posts.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTimelinePosts } from '../../actions/postAction';


const Posts = () => { 
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.authReducer.authData)
  const {posts,loading} = useSelector((state)=>state.postReducer)
  
  useEffect(()=>{
     dispatch(getTimelinePosts(user._id))
     console.log(posts)
  },[])

  return (
    <div className="posts">
        {   loading?"Fatching posts..."
            :posts.map((post,id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts