import React,{useState} from 'react'
import { ToggleButtonGroup } from 'react-bootstrap'
import {adddonates} from '../../Actions/donateActions'
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../Loader'
import Error from '../Error'
import Success from '../Success'
import './AddNewCategory.css'
const AddNewCategory = () => {
  const [name,setname] = useState('')
  const [image,setimage] = useState('')
  const [program,setprogram] = useState('')
  const [programs,setprograms] = useState([])
  const [description,setdescription] = useState('')
  const addDonateState = useSelector(state => state.addDonateReducer)
  const dispatch = useDispatch();
  const {loading,error,success}=addDonateState

const onSubmit = (e)=>{
  e.preventDefault();
  const newitem = {
    name,
    programs,
    image,
    description
  }
  console.log('   ',newitem)
  dispatch(adddonates(newitem))
}
const handleSubmit=(e)=>{
  e.preventDefault();
  // const date={program}
if(program){
    setprograms((ls)=>[...ls,program,])
    setprogram('')
}

}


  return (
    <div>
      {
        loading && <Loader/>
      }
      {
        error && <Error error='Add New Donation Category Error'/>
      } 
      {
        success && <Success success='Add New Donation Category Success'/>
      }
    {/* <section className="form-box">
            <h1>ADD NEW CATEGORY</h1>
        <p>Please Add A New Category </p>
        <form onSubmit={onSubmit}>
          <label>Heading</label>
            <input type="text" className='form-control' value={name} placeholder="Enter Your Name" onChange={ (e) => setname(e.target.value) }></input>
            <input
          name="program"
          placeholder='enter'
          value={program}
          onChange={(e) => setprogram(e.target.value)}
        />
        <h1 onClick={handleSubmit}>Submit</h1>

      {
        programs.map((a)=><div>
          <li>{a}</li>
        </div>)
      }
          <label>Image URL</label>  
            <input type="text" className='form-control' value={image} placeholder="Enter Your ImageURL" onChange={ (e) => setimage(e.target.value) }></input>  
          <label>Description</label>  
            <input type="text" className='form-control' value={description} placeholder="Enter Your Description" onChange={ (e) => setdescription(e.target.value) }></input>
            <button className='btnSub' type='submit'>Add New</button>
            
        </form>

  

     </section > */}

     <center>
        <div className="donatedetailsbody">
            <div class="wrapper">
              <div class="inner">
                <form action="" onSubmit={onSubmit}>
                  <h3>ADD NEW CATEGORY OF DONATION</h3>
                 
                    <div class="form-wrapper">
                      <label for="">Enter Name Of Your Category</label>
                      <input type="text" className='form-control' value={name} placeholder="Enter Your Name" onChange={ (e) => setname(e.target.value) }></input>
                    </div>
                    <label for="">Enter Programs Of Your Category</label>
                    <div class="form-group">
                    <div class="form-wrapper">
                    <input className='form-control'
                      name="program"
                      placeholder='enter'
                      value={program}
                      onChange={(e) => setprogram(e.target.value)}
                    />
                    </div>
                    
                    <div class="form-wrapper">
                    <label className='form-control' onClick={handleSubmit} style={{background:'#242424', color:'aliceblue', fontSize:'13px'}}>Click To Add Item To Programs</label>
                        {
                          programs.map((a)=><div>
                            <li>{a}</li>
                          </div>)
                        }
                    </div>
                    </div>
                    <br />
                  
                  <div class="form-wrapper">
                    <label for="">Enter Your Image URL</label>
                    <input type="text" className='form-control' value={image} placeholder="Enter Your ImageURL" onChange={ (e) => setimage(e.target.value) }></input>  
                  </div>
                  <div class="form-wrapper">
                    <label for="">Enter Your Category Description</label>
                
                    <input type="text" className='form-control' value={description} placeholder="Enter Your Description" onChange={ (e) => setdescription(e.target.value) }></input>
                   
                  </div>
                  
                  <button type="submit" >
                    ADD NEW CATEGORY
                  </button>
                </form>
              </div>
            </div>
        
        </div>
      </center>

    </div>
  )
}

export default AddNewCategory
