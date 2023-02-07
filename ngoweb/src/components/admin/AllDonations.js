import React,{useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { getAllDonations } from '../../Actions/recieveDonationAction'
import Loader from '../Loader'
import Error from '../Error'
import './adminDonateCategory.css'
const AllDonations = () => {
  const alldonationsstate = useSelector(state=> state.getAllDonationsReducer)
  const {loading, donations, error} = alldonationsstate
const dispatch =useDispatch()
useEffect(()=> {
dispatch(getAllDonations())
},[dispatch])

  return (
    <div>
      {
        loading && (<Loader/>)
      }
      {
        error && (<Error error="Fetching All Donations Failed"/>)
      }
      <div className="table-users">
   <div className="headers">All Donations</div>
   
   <table cellspacing="0">
      <tr>
         <th>Donation ID</th>
         <th>User id</th>
         <th>User Email</th>
         <th>Contact Number</th> 
         <th>Amount</th>
         <th>Date</th>
      </tr>
      {donations?.length > 0 && donations?.map((donation) => (
      <tr key={donation._id}>
      <td>{donation._id}</td>
      <td>{donation.transactionId}</td>
      <td>{donation.email}</td>
      <td>{donation.number}</td>
      <td>Rs:{donation.Amount}/-</td>
      <td>{donation.createdAt.substring(0,10)}</td>
      </tr>
      ))}



   </table>
</div>
    </div>
  
  )
}

export default AllDonations
