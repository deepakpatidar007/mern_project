import axios from 'axios'

const API = axios.create({baseURL:"http://localhost:5000"})

export const uploadImage = (img)=> API.post("/upload/",img) 

export const uploadPost = (data)=> API.post("/post",data)