import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
//import goalReducer from '../features/goals/goalSlice'
import {selectedDnteReducer} from '../reducers/selectedDnteReducer'
import {getDonateDetailsReducer,getDonateReducer,addDonateReducer,updateDonateDetailsReducer} from '../reducers/donateReducer'
import {placeDonationReducer,getUserDonationsReducer,getAllDonationsReducer} from '../reducers/recieveDonationReducer'
import {getAllUsersReducer} from '../reducers/userReducer'
import storage from 'redux-persist/lib/storage';
import { combineReducers,getDefaultMiddleware, } from '@reduxjs/toolkit';
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';


  const donateItems = localStorage.getItem('donateItems') ? JSON.parse(localStorage.getItem('donateItems')) : []

  const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const persistConfig = {
  // key: 'root',
  // version: 1,
  // storage,
};
const reducer = combineReducers({ 
  auth: authReducer,
  selectedDnte: selectedDnteReducer,
  getdonation: getDonateReducer,
  getdonationdetails: getDonateDetailsReducer,
  placeDonation:placeDonationReducer,
  getUserDonationsReducer:getUserDonationsReducer,
  addDonateReducer:addDonateReducer,
  updateDonateDetailsReducer:updateDonateDetailsReducer,
  getAllDonationsReducer:getAllDonationsReducer,
  getAllUsersReducer:getAllUsersReducer

});


const initialState ={
  selectedDnte : {
    donateItems:donateItems
  },
  auth:{
    user:user
  }
}

const persistedReducer = persistReducer(persistConfig,reducer)


export const store = configureStore({
  reducer: persistedReducer,
  initialState,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})