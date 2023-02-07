import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DonateNow from "../components/DonateNow";
// import { getdonates as listdonations } from "../Actions/donateActions";
import {Container,Row,Col} from 'react-bootstrap';
import { getdonates } from "../Actions/donateActions";
import Loader from "../components/Loader";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const DonatePage = () => {
  const dispatch = useDispatch();
  const getdonation = useSelector((state) => state.getdonation);
  const { donates, loading, error } = getdonation;
  console.log("getdonation", getdonation);


  useEffect(() => {
    // dispatch(listdonations());
    dispatch(getdonates());
  }, [dispatch]);

  useEffect(() => {}, [getdonation]);

  return (
    <>
    <Navbar/>
    <br/>
   <br/>
     <br/>
     <br/>
     <br/>
<Container>
  <Row>
          {loading ? (
            <Loader/>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
           donates && donates.map((donate) => (
             <Col md={4}> 
              <DonateNow
                key={donate._id}
                name={donate.name}
                description={donate.description}
                programs={donate.programs}
                image={donate.image}
                donationId={donate._id}/></Col>
            ))
          )}
          </Row>
          </Container>
            <br/>
            <br/>
            <br/>
<Footer/>
    </>
  );
};

export default DonatePage;
