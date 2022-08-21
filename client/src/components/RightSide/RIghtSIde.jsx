import React,{useState} from 'react'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import './RIghtSIde.css'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'
import { Link } from 'react-router-dom'

const RIghtSIde = () => {
  const [modalOpened,setModalOpened] = useState(false)
  
  return (
    <div className="rightside">
        <div className="navicons">
        <Link to="../home">
            <img src={Home} alt='' />
            </Link>
            <UilSetting />
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
        </div>

        <TrendCard />
        <button className="button bt-sh" onClick={()=>setModalOpened(true)}>
            
            Share
        </button>
        <ShareModal modalOpened={modalOpened}
                setModalOpened={setModalOpened}
            />
    </div>
  )
}

export default RIghtSIde