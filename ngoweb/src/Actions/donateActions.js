import * as actionTypes from "../Constant/donateConstant";
import axios from "axios";
import swal from "sweetalert";

export const getdonates = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_DONATE_REQUEST });
    const { data } = await axios.get("/api/donates");
    // console.log("data DonateActions", data);
    dispatch({
      type: actionTypes.GET_DONATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_DONATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adddonates = (newitem) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ADD_DONATE_REQUEST });
    const { data } = await axios.post("/api/donates/adddonates",{newitem});
    // console.log("data DonateActions", data);
    dispatch({
      type: actionTypes.ADD_DONATE_SUCCESS,
     // payload: data,
     
    });
    window.location.href = '/admin/admindonatecategory'
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_DONATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const getDonateDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_DONATE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/donates/${id}`);

    dispatch({
      type: actionTypes.GET_DONATE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_DONATE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


// export const updateDonate = (updateid) => async (dispatch) => {
//   try {
//     dispatch({ type: actionTypes.UPDATE_DONATE_DETAILS_REQUEST });

//     const { data } = await axios.post(`/api/donates/updatedonates/${updateid}`);

//     dispatch({
//       type: actionTypes.UPDATE_DONATE_DETAILS_SUCCESS,
//       payload: data,
      
//     });
//     window.location.href = '/admin/admindonatecategory'
//   } catch (error) {
//     dispatch({
//       type: actionTypes.UPDATE_DONATE_DETAILS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });

//   }
// };

export const updateDonate = (updateditem) => async (dispatch) => {
  
  try {
    dispatch({ type: actionTypes.UPDATE_DONATE_DETAILS_REQUEST });
    const { data } = await axios.post("/api/donates/updatedonates", {
      updateditem,
    });
    dispatch({ type: actionTypes.UPDATE_DONATE_DETAILS_SUCCESS, payload: data });
    window.location.href = "/admin/admindonatecategory";
  } catch (error) {
    dispatch({
    type: actionTypes.UPDATE_DONATE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
           ? error.response.data.message
           : error.message, });
  }
};

export const deleteDonate = (id) => async (dispatch) => {
    try {
    await axios.post("/api/donates/deletedonates", { id });
    swal("Donation Category Deleted Succss!", "success");
    window.location.href = "/admin/admindonatecategory";
    // console.log(res);
  } catch (error) {
    swal("Error While Deleteing Pizza");
  }
}


