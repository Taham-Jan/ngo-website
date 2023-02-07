import axios from 'axios'
import swal from "sweetalert";

export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: "GET_USERS_REQUEST" });
    try {
      const response = await axios.get("/api/users/getallusers");
      // console.log(response.data);
      dispatch({ type: "GET_USERS_SUCCESS", payload: response.data });
    } catch (err) {
      dispatch({ type: "GET_USERS_FAIL", payload: err });
    }
  };
  
  export const deleteUser = (userid) => async (dispatch) => {
    try {
      await axios.post("/api/users/deleteuser", { userid });
      swal("User Deleted Success!", "success");
      window.location.reload();
      // console.log(res);
    } catch (error) {
      swal("Error While Deleting User");
    }
  };