import * as actionTypes from '../Constant/selectedDnteConstant'
import axios from 'axios'

export const selectDonation = (id,amount,program) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/donates/${id}`)

    dispatch({
        type: actionTypes.ADD_TO_PAY,
        payload: {
           donation: data._id,
           name: data.name,
           program:program,
           image: data.image,
           description: data.description,
           amount:amount

        }
    })
    localStorage.setItem('selecteddonation',JSON.stringify(getState().selecteddonation.donateItems))
}

export const removeSelected = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_PAY,
        payload: id
    })
    localStorage.setItem('selecteddonation',JSON.stringify(getState().selecteddonation.donateItems))
    
}