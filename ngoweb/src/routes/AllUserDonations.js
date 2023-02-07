import React,{useEffect} from 'react'
import {getUserDonations} from '../Actions/recieveDonationAction'
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../components/Loader';
import Error from '../components/Error';
import { Row, Col } from "react-bootstrap";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './allUserDonation.css'


const AllUserDonations = () => {
  const donationsState = useSelector((state) => state.getUserDonationsReducer);
  const { loading, error, donations } = donationsState;
   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDonations());
  },[dispatch])
  return (
    // <div>
    //   <h1>ALL MY DONATIONS</h1>
    //   {
    //   loading && <Loader/>
    // }
    // {
    //   error && <Error error='Something Went Wrong'/>
    // }
    // {donations && donations.map((donation) => (
    //       <div className="container border p-4 bg-light">
    //         <Row>
    //           <Col md={4}>
    //             <h4>Items :</h4>
    //             {donation.donateCategory.map((item) => (
    //               <h6 key={item.name}>
    //                 {item.name} [{item.program}] {item.description} 
    //               </h6>
    //             ))}
    //           </Col>
    //           <Col md={5}>
    //             <h4>Order Info :</h4>
    //             <h6>Phone Number : {donation.number}</h6> 
    //             <h6>Donation Amount : {donation.Amount}</h6>
    //             <h6>Transection id : {donation.transactionId}</h6>
    //             <h6>Donation id : {donation._id}</h6>
    //           </Col>
    //         </Row>
    //       </div>
    //     ))}
    // </div>



<>
<Navbar/>

<><br /><br /><br /><br /><center>
{(donations|| []).length === 0 && <h1><br /><br /><br />You Currently Have Not Done Any Donations Yet<br /><br /><br /> <br /><br /><br /></h1> }
       <div className='alldonatebody'>
         {loading && <Loader />}
         {error && <Error error='Something Went Wrong' />}

         {donations?.length > 0 && donations?.map((donation) => (

           <><div class="wrapperall">
             <div class="box1 headerall"><strong>MY DONATION : {donation.createdAt.substring(0, 10)}</strong></div>
             <div class="box1 sidebarall">
               <strong><h3>DONATION CATEGORY</h3></strong>
               <hr class="roundedH" />
               {donation.donateCategory.map((item) => (
                 <><h4>Name :</h4><label>{item.name}</label><br /><h4>Selected Program :</h4><label>{item.program}</label><br /><h4>Program Description:</h4><label>{item.description}</label></>
               ))}
             </div>
             <div class="box1 contentall">
               <strong> <h3>PAYMENT INFORMATION</h3> </strong>
               <hr class="roundedH" />
               <h4>Phone Number :</h4>
               <label>{donation.number}</label>
               <h4>Donation Amount :</h4>
               <label>{donation.Amount}</label>
               <h4>Transection id : </h4>
               <label>{donation.transactionId}</label>
               <h4>Donation id :</h4>
               <label>{donation._id}</label>

             </div>


             <div class="box1 footerall"><strong>T H A N K Y O U F O R Y O U R D O N A T I O N</strong></div>
           </div><div className='roundedbg'><hr className="rounded" /></div></>
         ))}

       </div>
     </center></>
  
  <Footer/>

</>
  )
}

export default AllUserDonations
 