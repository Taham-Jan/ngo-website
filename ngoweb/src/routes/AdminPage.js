import React,{useEffect} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {useSelector} from 'react-redux'
import{Row,Col,Container,Button,ButtonGroup} from 'react-bootstrap';
import { Route, Routes, useNavigate , Link, Outlet} from 'react-router-dom'


const AdminPage = () => {
  const navigate = useNavigate();
  // useEffect(()=>{
  //   if(localStorage.getItem('user') === null || !user.isAdmin){
  //       window.location.href='/'
  //   }
  // },[])
  // const {user} = useSelector((state) => state.auth)

  // useEffect(() => {
  //  if(localStorage.getItem('user') === !user.isAdmin) {
  //   window.location.href='/'
  //  }
  // }, [])

  const userState = useSelector((state) => state.auth);
  const { user } = userState;
  useEffect(() => {
    if (localStorage.getItem("user") === null || !user.isAdmin) {
      window.location.href = "/";
    }
  }, [user]);
 
  return (
  
    <div>
     <Navbar/> 
        <br/>
        <br/>
        <br/>
        <br/>
        <Container>
        <Row>

            <h1 className='text-center text-light p-2' style={{background:'#242424'}}>ADMIN PANEL</h1>
         
                <ButtonGroup horizontal >
                    <Button style={{minHeight:'100px', background:'#84a969',  border: '2px solid #84a969'}}  onClick={() => navigate('/admin/allusers')}>ALL USERS</Button>
                    <Button style={{minHeight:'100px', background:'#84a969',  border: '2px solid #84a969'}}  onClick={() => navigate('/admin/newcategory')}>ADD NEW DONATION CATEGORY</Button>
                    <Button style={{minHeight:'100px', background:'#84a969',  border: '2px solid #84a969'}}  onClick={() => navigate('/admin/alldonation')}>ALL DONATIONS RECEIVED</Button>
                    <Button style={{minHeight:'100px', background:'#84a969',  border: '2px solid #84a969'}}  onClick={() => navigate('/admin/admindonatecategory')}>CURRENT DONATION CATEGORY</Button>
                </ButtonGroup>
    
          
                <Outlet/>
           
        </Row>
      </Container>
     <Footer/> 

    </div>
  )
}

export default AdminPage
