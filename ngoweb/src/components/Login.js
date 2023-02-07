import React, { useState, useEffect } from 'react'
import './Login.css'
import {Alert} from '@mui/material'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { login,reset } from '../features/auth/authSlice'
import Loader from './Loader'

const Login = () => {
const [error,setError] = useState({
    status:false,
    msg : '',
    type : ''
})


const [formData,setFormData] = useState({
    email: '',
    password: ''

})

const {email,password} = formData

const navigate = useNavigate()
const dispatch = useDispatch()

const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if(isError){
        setError({status:true, msg: 'Email &  Password Dont Match', type: 'success'})
    }
    if(isSuccess || user) 
    {
        navigate('/')
    }
    dispatch(reset())
    
    },[user,isError,isSuccess, message, navigate, dispatch])

const onChange = (e) => {
    setFormData((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value
    })) 
}
const onSubmit = (e) => {
    e.preventDefault()
    if(email && password){
            const userData={
                email,
                password
            }
            dispatch(login(userData))
            setError({status:true, msg: 'Login Success', type: 'success'})
        } else {
            setError({status:true, msg: 'All Fields Required', type: 'error'})
        }
}

if(isLoading){
    return <Loader/>
}

    return (
        
        <center>
            <br/>
            <br/>
            <br/>
        <section className="form-box">
            <h1>LOGIN</h1>
        <p>Sign In To Your Account </p>
        
        <form onSubmit={onSubmit}>  
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
            <input type="text" className='form-control' id='email' name="email" value={email} placeholder="Enter Your email" onChange={ onChange }></input>
            <input type="password" className='form-control' id='password' name="password" value={password} placeholder="Enter Your password" onChange={ onChange }></input>
            <button className='btnSub' type='submit'>Login</button>
            <h1>or</h1>
            <Link to='/register'><div className="btnSub" >Register</div></Link>
        </form>
        </section >
             <br/>
            <br/>
            <br/>
        </center>
    )
}

export default Login