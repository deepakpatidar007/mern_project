import React, { useState } from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModel from '../ProfileModel/ProfileModel'

const InfoCard = () => {

    const [modelOpened,setModelOpened] = useState(false)
  return (
    <div className="infocard">
        <div className="infohead">
            <h4>Your Info</h4>
            <UilPen onClick={()=>setModelOpened(true)}/>
            <ProfileModel modelOpened={modelOpened}
                setModelOpened={setModelOpened}
            />
        </div>
        <div className="info">
            <span>
                <b>status</b>
            </span>
            <span>In Relationship</span>
        </div>
        <div className="info">
            <span>
                <b>Lives In</b>
            </span>
            <span>Darjiling</span>
        </div>
        <div className="info">
            <span>
                <b>works</b>
            </span>
            <span>ZainKeepscode</span>
        </div>
        <button className="button btn-logout">
            Logout
        </button>
    </div>
  )
}

export default InfoCard