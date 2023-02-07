import React,{useEffect} from 'react'
import './adminDonateCategory.css'
import{useDispatch,useSelector} from 'react-redux'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import { Link } from "react-router-dom"
import {removeDonateDetails,getdonates,deleteDonate} from '../../Actions/donateActions'
import { getDropdownMenuPlacement } from 'react-bootstrap/esm/DropdownMenu';

const AdminDonateCategory = () => {
  const dispatch = useDispatch()
  const getdonation = useSelector((state) => state.getdonation)
  const { donates, loading, error } = getdonation
  console.log("getdonation", getdonation)
  useEffect(() => {
    dispatch(getdonates());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching pizzas {error}</Error>
      ) : (
  <div className="table-users">
   <div className="headers">CURRENT DONATION CATEGORIES</div>
   
   <table cellspacing="0">
      <tr>
         <th>Image</th>
         <th>Name</th> 
         <th>Programs</th>
         <th width="230">Description</th>
         <th>Actions</th>
      </tr>
{donates && donates.map((donate) =>(
      <tr>
         <td><img className='adminimg' src={donate.image} alt="" /></td>
         <td>{donate.name}</td>
         <td> <select className='box'>
                  {donate.programs.map((program) => (
                    <option key={program}>{program}</option>
                  ))}
                </select></td>
         <td>{donate.description}</td>
         <td> <center><Link to={`/admin/editcategory/${donate._id}`}>
                        <AiFillEdit style={{ cursor: "pointer" }} />
                      </Link>
                      &nbsp;
                      <AiFillDelete
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          dispatch(deleteDonate(donate._id));
                        }}/></center></td>
      </tr>
))}
  
   </table>
</div>)}
    </div>
  )
}

export default AdminDonateCategory
