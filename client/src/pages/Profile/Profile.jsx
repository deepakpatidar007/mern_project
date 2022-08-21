import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import './Profile.css'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'
import RIghtSIde from '../../components/RightSide/RIghtSIde'

const Profile = () => {
  return (
    <div className="profile">
        <ProfileLeft />
        <div className="profilecenter">
            <ProfileCard location = "profilePage"/>
            <PostSide />
        </div>
        <RIghtSIde />
    </div>
  )
}

export default Profile