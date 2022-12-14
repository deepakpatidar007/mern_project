import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../logosearch/LogoSearch'
import './ProfileLeft.css'

const ProfileLeft = () => {
  return (
    <div className="profileleft">
        <LogoSearch />
        <InfoCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileLeft