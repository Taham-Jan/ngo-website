export const placeDonationReducer =(state={},action) => {
    switch(action.type){
        case 'PLACE_DONATION_REQUEST':
        return{
             loading:true
        }
        case 'PLACE_DONATION_SUCCESS':
        return{
            loading:false,
            success:true
        }
        case 'PLACE_DONATION_FAIL':
        return{
            loading:false,
            error:action.payload,
        }
        default:
            return state
    }
}
export const getUserDonationsReducer = (state = { donations: [] }, action) => {
    switch (action.type) {
      case "ALL_USER_DONATION_REQUEST":
        return {
          loading: true,
          ...state,
        };
      case "ALL_USER_DONATION_SUCCESS":
        return {
          loading: false,
          success: true,
          donations: action.payload,
        };
      case "ALL_USER_DONATION_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const getAllDonationsReducer = (state = { donations: [] }, action) => {
    switch (action.type) {
      case "ALL_DONATION_REQUEST":
        return {
          loading: true,
          ...state,
        };
      case "ALL_DONATION_SUCCESS":
        return {
          loading: false,
          //success: true,
          donations: action.payload,
        };
      case "ALL_DONATION_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };