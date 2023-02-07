import React from 'react'
import { Link } from 'react-router-dom'
import './BackgroundStyle.css'
import ngo from '../assets/bgvideo.mp4'
import logo from '../assets/MAINLOGO.png'

const Background = () => {

  
  return (
    <div className='vid_div'>
    <video autoPlay loop muted id='video'>
        <source src={ngo} type='video/mp4' />
    </video>
    <div className='txt_div'>
    <img src={logo} className='videologo' alt="Avatar" width="200px" height="200px" />
        <br/>
        <br/>
        <h4>BE THE CHANGE YOU WANT TO SEE IN THE WORLD !</h4>
        <br/>
        <div>
   
        </div>
    </div>
</div>

  )
}




export default Background
