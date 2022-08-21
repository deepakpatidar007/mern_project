import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction'



const Auth = () => {

    const dispatch = useDispatch()
    const loading = useSelector((state)=>state.authReducer.loading)
    const [isSignUp,setIsSignUp] = useState(true)
    const [data,setData] = useState({firstname:"",lastname:"",password:"",confirmpass:"",username:""})
    const [confirmPass,setConfirmPass] = useState(true)

    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(isSignUp){
            data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false)
        }else{
            dispatch(logIn(data))
        }
        
    } 
    const resetForm = ()=>{
        setConfirmPass(true)
        setData({
            firstname:"",lastname:"",password:"",confirmpass:"",username:""
        })
        
    }

  return (
    <div className='auth'>
    {/* leftside */}
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="webname">
                <h1>BKT Tires</h1>
                <h6>Explore the ideas throughout worlds</h6>
            </div>
        </div>
        {/* rightside */}
        <div className="a-right">
            <form action="" className="infoform authform" onSubmit={handleSubmit}>
                <h3>{isSignUp?"Sign up":"Log in"}</h3>
                {isSignUp &&
                    <div>
                <input type="text" placeholder='First name'
                className='infoinput' name='firstname'
                onChange={handleChange} 
                value= {data.firstname}
                />
                <input type="text" placeholder='Last name'
                className='infoinput' name='lastname'
                onChange={handleChange}
                value ={data.lastname} />
                </div>
                }

                <div>
                    <input type="text" placeholder='username' 
                    className="infoinput" name='username' 
                    onChange={handleChange}
                    value={data.username}
                    />
                </div>
                <div>
                    <input type="password" placeholder='password' 
                    className="infoinput" name='password'
                    onChange={handleChange}
                    value={data.password}
                    />
                    {isSignUp && 
                        <input type="password" placeholder='confirm password' 
                        className="infoinput" name='confirmpass'
                        onChange={handleChange}
                        value={data.confirmpass}
                        />
                    }
                    
                </div>
                <span style={{display:confirmPass?"none":"block",color:"red",fontsize:"12px",alignSelf:"flex-end",marginRight:"5px"}}>
                * confirm password is not same.</span>
                <div>
                    <span style={{fontsize:"12px" ,cursor:'pointer'}} onClick={()=>{setIsSignUp((prev)=>!prev); resetForm()}}>
                    {isSignUp? "Already have an account. Login!":"Don't have an account? Signup"}
                    </span>
                </div>
                <button className="button infobutton" type='submit' disabled={loading}>
                    {loading?"loading..." :isSignUp?"Signup":"Login"}
                </button>
            </form>
        </div> 
    </div>
  )
}



export default Auth