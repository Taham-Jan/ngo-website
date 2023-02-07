import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Loginprofile from "./routes/Loginprofile";
import Registerprofile from "./routes/Registerprofile";
import DonatePage from "./routes/DonatePage";
import Payment from "./routes/Payment";
import DonateCategory from './routes/DonateCategory'
import AdminPage from "./routes/AdminPage";
import AddNewCategory from "./components/admin/AddNewCategory";
import AdminDonateCategory from "./components/admin/AdminDonateCategory";
import AllDonations from "./components/admin/AllDonations";
import AllUser from "./components/admin/AllUser";
import AllUserDonations from "./routes/AllUserDonations";
import EditDonationCategory from "./components/admin/EditDonationCategory";
function App() {
  return (
    <>

<Routes>
<Route path="/" element={<Home/>} />
<Route path='/mydonations' element={<AllUserDonations />} /> 
<Route path='/login' element={<Loginprofile />} /> 
<Route path='/register' element={<Registerprofile />} /> 

<Route path="/donatenow" element={<DonatePage/>} />
<Route path="/donates/:id" element={<DonateCategory/>} />
<Route path="/payment" element={<Payment/>} />

<Route path="/admin" element={<AdminPage/>} >
  <Route path='/admin' element={<AllUser/>} exact/>
  <Route path='/admin/newcategory' element={<AddNewCategory/>} />
  <Route path='/admin/alldonation' element={<AllDonations/>} />
  <Route path='/admin/allusers' element={<AllUser/>} />
  <Route path='/admin/admindonatecategory' element={<AdminDonateCategory/>} />
  <Route path='/admin/editcategory/:id' element={<EditDonationCategory/>} />
</Route>
</Routes>


    </>
  )
}

export default App;