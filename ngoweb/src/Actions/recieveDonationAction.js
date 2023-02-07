import axios from "axios";

export const placeDonation = (token,amount) => async (dispatch, getState) =>{
    dispatch({type:'PLACE_DONATION_REQUEST'})
    const user = getState().auth.user
    const donateItems = getState().selectedDnte.donateItems
    try {
        const res= await axios.post('/api/payment/placedonation',{token,amount,user,donateItems})
        dispatch({type:'PLACE_DONATION_SUCCESS'})
        console.log(res)
    } catch (error) {
        dispatch({type:'PLACE_DONATION_FAIL'})
        console.log(error)
    }
    
} 
export const getUserDonations = () => async (dispatch,getState) => {
    const user = getState().auth.user
    dispatch({
        type: 'ALL_USER_DONATION_REQUEST'
    })
    try {
        const response = await axios.post('/api/payment/getuserdonations',{userid:user._id})
        dispatch({type:'ALL_USER_DONATION_SUCCESS',payload:response.data}) 
    } catch (error) {
        dispatch({type:'ALL_USER_DONATION_FAIL',payload:error})
    }
}

// Found the error, in orderAction at line 29
// there is no such property as currentUser._id,
// thus userid contains undefined, 
// instead we could set userid = currentUser.email
// to get the his own order.
export const getAllDonations = () => async (dispatch,getState) => {
//const user = getState().auth.user
    dispatch({
        type: 'ALL_DONATION_REQUEST'
    })
    try {
        const response = await axios.get('/api/payment/getalldonations')

        dispatch({type:'ALL_DONATION_SUCCESS',payload:response.data}) 
    } catch (error) {
        dispatch({type:'ALL_DONATION_FAIL',payload:error})
    }
}