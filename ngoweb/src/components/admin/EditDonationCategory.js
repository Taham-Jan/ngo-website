import React, { useState,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom';
import {getDonateDetails,updateDonate} from '../../Actions/donateActions'
import Loader from '../Loader'
import Error from '../Error'

const EditDonationCategory = () => {
    const [name,setname] = useState('')
    const [image,setimage] = useState('')
    const [program,setprogram] = useState('')
    const [programs,setprograms] = useState([])
    const [description,setdescription] = useState('')

const { id } = useParams();
const dispatch = useDispatch();
const navigate = useNavigate();
const donationdetails = useSelector((state) => state.getdonationdetails);
const { donate, loading, error } = donationdetails;

const updatedonationdetails = useSelector((state) => state.updateDonateDetailsReducer);
const { updateloading , updatesuccess , updateerror } = updatedonationdetails;


console.log("getdonationdetails", donationdetails);


useEffect(() => {

  if(donate){
    if (donate._id === id) {

      setname(donate.name);
      setdescription(donate.description);
      setimage(donate.image);
      setprograms(donate.programs)


     }
     else{
        dispatch(getDonateDetails(id))
     }}
     else{
      dispatch(getDonateDetails(id))
     }
  },[donate,dispatch,id]);//, [dispatch, donate]);

  const onSubmit = (e)=>{
    e.preventDefault();
    const updateditem = {
      _id:id,
      name,
      programs,
      image,
      description
    }
    dispatch(updateDonate(updateditem))
  }
  return (
    <div>
 
      <div>
      {
        updateloading && <Loader/>
      }
      {
        error && <Error error='Edit Donation Category Error'/>
      } 

    {/* <section className="form-box">
            <h1>UPDATE CATEGORY</h1>
        <p>Please Update A New Category </p>
        <form onSubmit={onSubmit}>
          <label>Heading</label>
           <input type="text" className='form-control' value={name} placeholder="Enter Your Name" onChange={ (e) => setname(e.target.value) }></input>
          
      <ul>
        {programs.map((item, index) => (
          <input type="text" key={index} value={item} onChange={(e) => setprograms(e.target.value, index)}></input>
          
        ))}
      </ul>
          <label>Image URL</label>  
            <input type="text" className='form-control' value={image} placeholder="Enter Your ImageURL" onChange={ (e) => setimage(e.target.value) }></input>  
          <label>Description</label>  
            <input type="text" className='form-control' value={description} placeholder="Enter Your Description" onChange={ (e) => setdescription(e.target.value) }></input>
            <button className='btnSub' type='submit'>Update</button>
            
        </form>

  

     </section > */}



     <center>
        <div className="donatedetailsbody">
            <div class="wrapper">
              <div class="inner">
                <form action="" onSubmit={onSubmit}>
                  <h3>EDIT SELECTED DONATION CATEGORY</h3>
              
                    <div class="form-wrapper">
                      <label for="">Edit Name Of Your Selected Category</label>
                      <input type="text" className='form-control' value={name} placeholder="Enter Your Name" onChange={ (e) => setname(e.target.value) }></input>
                    </div>
                    <div class="form-wrapper">
                      <label for="">Edit Programs Of Your Selected Category</label>                   
                      <ul >
                          {programs.map((item, index) => (
                            <input type="text" key={index} value={item} onChange={(e) => setprograms(e.target.value, index)}></input>
                            
                          ))}
                        </ul>
                    </div>
                    <br />
            
                  <div class="form-wrapper">
                    <label for="">Edit ImgaeURL Of Your Selected Category </label>
                    <input type="text" className='form-control' value={image} placeholder="Enter Your ImageURL" onChange={ (e) => setimage(e.target.value) }></input>  
                  </div>
                  <div class="form-wrapper">
                    <label for="">Edit Description Of Your Selected Category</label>
                    <input type="text" className='form-control' value={description} placeholder="Enter Your Description" onChange={ (e) => setdescription(e.target.value) }></input>
                    </div>
     
                  <button type="submit">
                    UPDATE YOUR CATEGORY
                  </button>
                </form>
              </div>
            </div>
  
        </div>
      </center>
    </div>
  
    </div>
  )
}

export default EditDonationCategory
