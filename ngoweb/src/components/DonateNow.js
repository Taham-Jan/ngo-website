 import {React,useEffect} from 'react'
 import './DonateNow.css'
 import {useNavigate} from 'react-router-dom'
 import { useSelector } from 'react-redux'
 import { Link } from "react-router-dom";
 import { AiOutlineArrowDown } from 'react-icons/fa';
 const DonateNow = ({ image, description, programs, name, donationId  }) => {
 const navigate = useNavigate()
 const {user} = useSelector((state) => state.auth)

//  useEffect(() => {
//   if(!user) {
//     navigate('/login')
//   }
//  }, [user,navigate])


return(
 
  <div className='donatemain'>

<div className="cards">
<div className="card">
      <img src={image} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://i.imgur.com/GXkddKn.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">{name}</h3>            
            <strong><span className="card__status">More Details </span></strong>
          </div>
        </div>
        <center><strong><p className="card__description">{description}</p></strong></center>
  
        <center><Link to={`/donates/${donationId}`} className="custom-btn btn-5">
          View
        </Link></center>
        <br/>
      </div>
    </div>  
    </div>   

     </div>
   )
 }
 
 export default DonateNow
 