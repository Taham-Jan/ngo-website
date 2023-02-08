import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./DonateCategory.css";

import { Link, useParams, useNavigate } from "react-router-dom";
import { getDonateDetails } from "../Actions/donateActions";
import { selectDonation } from "../Actions/selectedDnteActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const DonateCategory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const donationdetails = useSelector((state) => state.getdonationdetails);
  const { donate, loading, error } = donationdetails;

  console.log("getdonationdetails", donationdetails);

  const [amount, setamount] = useState('');
  const [program, setprogram] = useState('');

  useEffect(() => {
    // if (donate && id !== donate._id) {
console.log("program",program)
    dispatch(getDonateDetails(id));
    // }
  }, [dispatch]); //, [dispatch, donate]);

  const donationHandler = () => {
    console.log(
      "donate._id && amount &&  program",
      donate._id,
      amount,
      program
    );
    if (donate._id && amount && program) {
      dispatch(selectDonation(donate._id, amount, program));
      navigate("/payment");
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <center>
        <div className="donatedetailsbody">
          {loading ? (
            <Loader />
          ) : error ? (
            <Error>Error While Fetching Data {error}</Error>
          ) : (
            <div class="wrapper">
              <div class="inner">
                <form action="">
                  <h3>CONFIRM YOUR PAYMENT AMOUNT</h3>
                  <div class="form-group">
                    <div class="form-wrapper">
                      <label for="">Name Of Your Selected Category</label>
                      <h4 className="form-control">{donate.name}</h4>
                    </div>
                    <div class="form-wrapper">
                      <img src={donate.image} alt={donate.name} />
                    </div>
                    <br />
                  </div>
                  <div class="form-wrapper">
                    <label for="">Description:</label>
                    <textarea className="form-controlT">
                      {donate.description}
                    </textarea>
                  </div>
                  <div class="form-wrapper">
                    <label for="">Programs</label>

                    {
                      <select
                        value={program}
                        onChange={(e) => setprogram(e.target.value)}
                        className="form-control"
                      >
                         <option value="" selected disabled hidden>Choose here</option>
                        {donate.programs?.length>0 &&
                          donate.programs?.map((program) => (
                            <option key={program} value={program}>
                              {program}
                            </option>
                          ))}
                      </select>
                    }
                  </div>
                  <div class="form-wrapper">
                    <label for="">Enter Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      id="amount"
                      name="amount"
                      value={amount}
                      placeholder="Enter Your Donation Amount"
                      onChange={(e) => setamount(e.target.value)}
                    ></input>
                  </div>

                  <button type="button" onClick={donationHandler}>
                    PROCEED TO PAYMENT
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </center>
      <Footer />
    </>

    //     <div className="productscreen">
    //     {loading ? (
    //       <Loader/>
    //     ) : error ? (
    //       <Error>Error While Fetching Data {error}</Error>
    //     )
    //     : (
    //       <>

    //         <div className="productscreen__left">
    //           <div className="left__image">
    //             <img src={donate.image} alt={donate.name} />
    //           </div>
    //           <div className="left__info">
    //             <p className="left__name">{donate.name}</p>

    //             <p>Description: {donate.description}</p>
    //           </div>
    //         </div>
    //         <div className="productscreen__right">
    //           <div className="right__info">
    //          <p> Enter Amount:<input type="text" className='form-control' id='amount' name="amount" value={amount} placeholder="Enter Your Donation Amount" onChange={ (e) => setamount(e.target.value) }></input></p>
    //             <p>programs</p>

    //             <select value={program} onChange={(e) => setprogram(e.target.value)}>
    //               {donate && donate.programs.map((program) => (
    //                 <option key={program}>{program}</option>
    //               ))}
    //             </select>

    //             <p>

    //               <button type="button" onClick={donationHandler}>
    //                 PROCEED TO PAYMENT
    //               </button>
    //             </p>
    //           </div>
    //         </div>
    //       </>
    //     )}
    //   </div>
  );
};

export default DonateCategory;
