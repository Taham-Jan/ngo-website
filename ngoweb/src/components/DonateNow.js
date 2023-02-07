 import {React,useEffect} from 'react'
 import './DonateNow.css'
 import {useNavigate} from 'react-router-dom'
 import { useSelector } from 'react-redux'
 import { Link } from "react-router-dom";
 import { AiOutlineArrowDown } from 'react-icons/fa';
 const DonateNow = ({ image, description, programs, name, donationId  }) => {
 const navigate = useNavigate()
 const {user} = useSelector((state) => state.auth)

 useEffect(() => {
  if(!user) {
    navigate('/login')
  }
 }, [user,navigate])


return(
 
  <div className='donatemain'>
        {/* <div className="product">
      <img src={image} alt={name} ></img>

      <div className="product__info">
        <p className="info__name">{name}</p> 

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p>programs</p>
        <select>
          {programs.map(program => (
            <option value={program}>{program}</option>
          ))}
        </select>

        <Link to={`/api/donates/${donationId}`} className="info__button">
          View
        </Link>
      </div>
    </div>  */}
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
  
        <center><Link to={`/donates/${donationId}`} class="custom-btn btn-5">
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
 