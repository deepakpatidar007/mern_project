import React, { useState } from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModel from '../ProfileModel/ProfileModel'
import {useDispatch, useSelector} from 'react-redux' 
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import * as UserApi from '../../api/UserRequest.js'
import { logOut } from '../../actions/AuthAction'

const InfoCard = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const [modelOpened,setModelOpened] = useState(false)
    const profileUserId = params.id
    const [profileUser,setProfileUser] = useState({})

    const user = useSelector((state)=>state.authReducer.authData)

    useEffect(()=> {
        const fetchProfileUser = async()=> {
            if(profileUserId === user._id)
            {
                setProfileUser(user)
            }
            else{
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
            }
        }
        fetchProfileUser()
    },[user,profileUserId])
    const handleLogout = ()=>{
        dispatch(logOut())
    }
  return (
    <div className="infocard">
        <div className="infohead">
            <h4>Profile Info</h4>
            {user._id === profileUserId ? (
                <div>
                
                <UilPen onClick={()=>setModelOpened(true)}/>
                <ProfileModel modelOpened={modelOpened}
                setModelOpened={setModelOpened}
                data = {user}
            />
                </div>
            ): ""}
            
        </div>
        <div className="info">
            <span>
                <b>Relationship Status  </b>
            </span>
            <span>{profileUser.relationship}</span>
        </div>
        <div className="info">
            <span>
                <b>Lives In  </b>
            </span>
            <span>{profileUser.livesin}</span>
        </div>
        <div className="info">
            <span>
                <b>Works At  </b>
            </span>
            <span>{profileUser.worksat}</span>
        </div>
        <button className="button btn-logout" onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default InfoCard