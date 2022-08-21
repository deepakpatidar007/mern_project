import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {uploadImage} from '../../actions/uploadAction'
import { updateUser } from '../../actions/userAction';

function ProfileModel({modelOpened,setModelOpened,data}) {
  const theme = useMantineTheme(); 
  
  const {password,...other} = data
  
  const [formData,setFormData] = useState(other)
  
  const [profileImage,setProfileImage] = useState(null)
  const [coverImage,setCoverImage] = useState(null)
  const param = useParams()
  const dispatch = useDispatch()

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const onImageChange = (event)=>{
    if(event.target.files && event.target.files[0]){
      let img = event.target.files[0]
      event.target.name === "profileImage" ? setProfileImage(img) : setCoverImage(img )
    }
  }
  
  const handleSubmit = (event)=>{
    event.preventDefault()
    let userData = formData
    if(profileImage){
      const data = new FormData()
      const filename = Date.now() + profileImage.name
      data.append("name",filename)
      data.append("file",profileImage)
      userData.profilepicture = filename
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    if(coverImage){
      const data = new FormData()
      const filename = Date.now() + coverImage.name
      data.append("name",filename)
      data.append("file",coverImage)
      userData.coverpicture = filename
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    dispatch(updateUser(param.id,userData))
    setModelOpened(false)
  }

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modelOpened}
      onClose={()=>setModelOpened(false)}
      
    >
      {/* Modal content */}
    <form action="" className="infoform">
        <h3>Your Info</h3>
        <div>
            <input className="infoinput" placeholder='First name'
            name='firstname' onChange={handleChange} value = {formData.firstname}/>
            <input className="infoinput" placeholder='Last name'
            name='lastname' onChange={handleChange} value = {formData.lastname}/>
        </div>
        <div>
            <input className="infoinput" placeholder='Works At'
            name='worksat' onChange={handleChange} value = {formData.worksat}/>
        </div>
        <div>
            <input className="infoinput" placeholder='Lives In'
            name='livesin' onChange={handleChange} value = {formData.livesin}/>
            <input className="infoinput" placeholder='Country'
            name='country' onChange={handleChange} value = {formData.country}/>
        </div>
        <div>
            <input className="infoinput" placeholder='Relationship Status'
            name='relationship' onChange={handleChange} value = {formData.relationship}/>
        </div>
        <div>
            Profile Image
            <input type='file' name='profileImage' onChange={onImageChange}/>
            Cover Image
            <input type='file' name='coverImage' onChange={onImageChange}/>
        </div>
        <button type='submit'  className="button infobutton" onClick={handleSubmit}>Update</button>
    </form>
    </Modal>
    
  );
}
export default ProfileModel;