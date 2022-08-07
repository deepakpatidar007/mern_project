import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileside/ProfileSide'
import RIghtSIde from '../../components/RightSide/RIghtSIde'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <PostSide/>
        <RIghtSIde />
    </div>
  )
}

export default Home