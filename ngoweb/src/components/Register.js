import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {Alert} from '@mui/material'
import { register,reset } from '../features/auth/authSlice'
import './Register.css'
// import '.bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import Loader from './Loader'
import Error from './Error'
import {useFormik} from 'formik'

const Register = () => {
    const [error,setError] = useState({
        status:false,
        msg : '',
        type : ''
    })


  
const [formData,setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    password2:''
})

const {name,email,number,password,password2} = formData

const navigate = useNavigate()
const dispatch = useDispatch()

const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

useEffect(() => {
if(isError){
    toast.error(message)
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

 
    // if(name == ''){
    //     toast.error('Name empty')
    // return
    // }
    // if(email == ''){
    //     toast.error('email empty')
    // return
    // }
    // if(number == ''){
    //     toast.error('number empty')
    // return
    // }
    // else{
    //     if( !(number.match('  ^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm')) ){
    //         setError({status:true, msg: "Invalid Phone Number", type: 'error'})
    //    }

    // 

let regName = /^[A-Za-z][A-Za-z0-9_]{3,29}$/;
let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(name && email && number && password && password2){
if(name.match(regName) ){    
    if(email.match(regEmail) ){
      if(number.match("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$") ){
         if(password.length>=6){
              if(password === password2){
                    const userData = {
                        name,
                        email,
                        number:String(number),
                        password,
                                     }
                        dispatch(register(userData))
                        setError({status:true, msg: 'Registration Success', type: 'success'})
                }
                else {setError({status:true, msg: "Password Doesn't Match", type: 'error'})}
                }
                else {setError({status:true, msg: "Password must be of atleast 6 character", type: 'error'})}
                }
                else{setError({status:true, msg:"Invalid Phone Number", type: 'error'})}
                } 
                else {setError({status:true, msg: 'Invalid Email Address', type: 'error'})}
                }
                else{setError({status:true, msg: 'Invalid User-Name must be of atleast 4 characters', type: 'error'})}
                }
                else {setError({status:true, msg: 'All Fields Required', type: 'error'})}
                }

 if(isLoading)
 {
   return<Loader/>
 }
    return (
        
        <center>
            <br/>
            <br/>
            <br/>
        <section className="form-box">
            <h1>REGISTRATION</h1>
        <p>Please Create An Account </p>
        <form onSubmit={onSubmit} className=''>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
            <input type="text" className='form-control' id='name' name="name" value={name} placeholder="Enter Your Name" onChange={ onChange }></input>
            <input type="text" className='form-control' id='email' name="email" value={email} placeholder="Enter Your email" onChange={ onChange }></input>
            <input type="number" className='form-control' id='number' name="number" value={number} placeholder="Enter Your Contact Number" onChange={ onChange }></input>
            <input type="password" className='form-control' id='password' name="password" value={password} placeholder="Enter Your password" onChange={ onChange }></input>
            <input type="password" className='form-control' id='password2' name="password2" value={password2} placeholder="Re-enter Your Password" onChange={ onChange }></input>
            <button className='btnSub' type='submit'>Register</button>
            <h1>or</h1>
          <a className="btnSub" href='/login'>Login</a>
        </form>
        </section >
             <br/>
            <br/>
            <br/>
        </center>
    )
}

export default Register