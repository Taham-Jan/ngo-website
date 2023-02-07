import * as actionTypes from '../Constant/selectedDnteConstant'

export const selectedDnteReducer = (state = {donateItems: []}, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_PAY:
            const item = action.payload;

            const existItem = state.donateItems.find((x) => x.donates === item.donates)

            if(existItem) {
                return{
                    ...state,
                    donateItems: state.donateItems.map((x) => x.donates === existItem.donates ? item : x)
                }
            }
            else {
                return{
                    ...state,
                    donateItems: [...state.donateItems, item],
                }
            }
            case actionTypes.REMOVE_FROM_PAY:
                return{
                    ...state,
                    donateItems: state.donateItems.filter((x) => x.donates !== action.payload)
                }
            default:
                return state;
    }
}