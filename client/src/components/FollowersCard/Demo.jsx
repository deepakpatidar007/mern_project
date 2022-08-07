import React from 'react'
import Followers from '../../Data/FollowersData.js'


const Demo = () => {
  return (
    <div className="Demo">
        <h3>who is following you</h3>
        {Followers.map((data,id)=>{
            <div className='img'>
                <img src={Followers.img} alt='' />
            </div>
            
        })}
    </div>
  )
}

export default Demo