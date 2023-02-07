import React,{useState,useEffect} from 'react'
import './adminpage.css'
import { AiFillDelete } from "react-icons/ai";
import { useDispatch,useSelector } from 'react-redux'
import Loader from '../Loader'
import Error from '../Error'
import { deleteUser, getAllUsers } from "../../Actions/userAction";
const AllUser = () => {
  const userState = useSelector((state) => state.getAllUsersReducer);
  const { loading, error, users } = userState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div>
      {loading && <Loader />}
      {error && <Error error="Error While Fetching Users" />}
      <div className="table-users">
   <div className="headers">All Users Details</div>
   
   <table cellspacing="0">
      <tr>
         <th>User ID</th>
         <th>User Name</th>
         <th>User Email</th>
         <th>User Contact Number</th> 
         <th>Date</th>
         <th>Actions</th>
      </tr>
      {
           users && users?.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>{user.createdAt.substring(0,10)}</td>
                <td>
                  <center>
                  <AiFillDelete
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => {
                      dispatch(deleteUser(user._id));
                    }}
                  /></center>
                </td>
              </tr>
            ))}
      </table>
      </div>
    </div>
  
  )
}

export default AllUser
