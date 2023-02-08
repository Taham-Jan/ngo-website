import * as actionTypes from "../Constant/donateConstant";
// const initialState = {
//   loading: false,
//   error: false,
//   donates: [],
// };
export const getDonateReducer = (state = {donates: []}, action) => {
  switch (action.type) {
    case actionTypes.GET_DONATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_DONATE_SUCCESS:
      return {
        donates: action.payload,
        error: false,
        loading: false,
      };
    case actionTypes.GET_DONATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addDonateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_DONATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ADD_DONATE_SUCCESS:
      return {
        success:true,
        error: false,
        loading: false,
      };
    case actionTypes.ADD_DONATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};



export const getDonateDetailsReducer = (state = { donate: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_DONATE_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_DONATE_DETAILS_SUCCESS:
      return {
        loading: false,
        donate: action.payload,
      };
    case actionTypes.GET_DONATE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_DONATE_DETAILS_RESET:
      return {
        donate: {},
      };
    default:
      return state;
  }
};


export const updateDonateDetailsReducer = (state = { donate: {} }, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_DONATE_DETAILS_REQUEST:
      return {
        updateloading: true,
      };
    case actionTypes.UPDATE_DONATE_DETAILS_SUCCESS:
      return {
        updateloading: false,
        updatesuccess: true
      };
    case actionTypes.UPDATE_DONATE_DETAILS_FAIL:
      return {
        updateloading: false,
        updateerror: action.payload,
      };
    // case actionTypes.UPDATE_DONATE_DETAILS_RESET:
    //   return {
    //     donate: {},
    //   };
    default:
      return state;
  }
};
