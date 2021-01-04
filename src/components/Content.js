import React from 'react'
import './Content.css';
import paypal from '../assets/paypal.svg'
import visa from '../assets/visa.svg'
import mastercard from '../assets/mastercard.svg'

const Content = () => {

    
    return (
        <div className="container-fluid my-5" style={{height:"100%"}} >

            <center >
                <label className="display-4 header">Your Plan</label>
            </center>
       <div class="row justify-content-md-center  text-light my-4">
        
        <div className="col-xl-4 col-lg-6  colorBg paddingRight ">       
                    <div className="row m-4">
                      <div className="col-5">
                        <label className="display-5 align-top mb-2">Sign Up</label>
                        </div>
                        <div className="col-7 col-lg-6 my-4" style={{fontSize:15 }}  >
                        Already have an account? Signin
                        </div>

                   
                
                    <div className=" container p-4 " >
                        <div className="row my-2">
                            <label >Name</label>
                            <input type="text" name="" id="" className="form-input inputStyle "  />
                        </div>

                        <div className="row my-5">
                            <label >Title</label>
                            
                            <select className=" form-select  inputStyle">
                                <option default  disabled selected>
                                    --select--
                            </option>
                            </select>    
                        </div>
                        <div className="row my-5">
                            <label >Email</label>
                            <input type="email" name="" id="" className="form-input inputStyle "  />
                        </div>

                        <div className="row my-5">
                            <label >Password</label>
                            <input type="password" name="" id="" className="form-input  inputStyle"  />
                        </div>
                        <div className="row my-5">
                            <label style={{fontSize:"15"}}>Add Invoice Information ></label>
                        </div>
                        
                        </div>
                        </div>
                </div>
                
               <div className=" col-xl-4 col-lg-6 colorBg">
                    <div className="m-4 ">
                        <div>
                        <h2 className="pb-2">Unlimited</h2>
                            <hr style={{width:130}}/>
                        </div>

                        <div className="pt-2 pb-2">
                            <label className="display-6 mx-1">$10</label>
                            <label className="" style={{fontSize:20}}> /month</label>
                        </div>
                        <hr />
                        <div className="mt-4">
                            <input type="radio" name="g1" id="" className="radioBTN" />
                            <label className="mx-2">PayPal</label>
                            <img className="mx-2" src={paypal}/>
                        </div>
                        <div className="my-3">
                            <input type="radio" name="g1" id="" className="radioBTN" />
                            <label className="mx-2">Credit / debit card</label>
                            <img className="mx-2" src={visa} />
                            <img className="mx-1" src={mastercard}/>
                        </div>
                        
                        <div className="container-fluid  mb-2">
                            <div >
                            <div className="container">
                                <div className="row">
                                    <label>Card Holder Name</label>
                                <input type="text" name="" id="" className="inputStyle"/>
                       
                                </div>
                                <div className="row my-4">
                                    <label>Card Number</label>
                                <input type="text" name="" id="" className="inputStyle"/>
                       
                                    </div>
                                    </div>
                                <div className="row my-4 mx-0 "  >
                                    <div className="col-6">
                                    <label className="mx-3">Exp. (MM/YY)</label>
                                   <input type="text" name="" id="" className="form-input inputStyle smallInput  "  />
                        
      </div>
                                    <div className="col-6">
                                    <label className="mx-3">CVV</label>
                                <input type="text" name="" id="" className="inputStyle smallInput"/>
                       
                                    </div>
                                    
                                </div>
                               
                            </div>
                          
                        </div>
                        
                        
                        

                        <div className="secondPart">
                            <hr />
                            
                            <div className="row mt-4 mb-4">
                                <div className="col-10">

                                    <label style={{fontSize:20}}> Total/month</label>
                                </div>
                                <div className="col-2">

                            <label style={{fontSize:20}} className="align-right"> $10</label>
                            </div>
                            </div>
                            <hr />
                            <div className=" justify-content-center d-flex mt-4">
                                <button style={{width:180}}className="btn btn-info rounded-pill btn-lg">Subscribe</button>
                            </div>

                            <div className="mt-5">
                                <div className="row">
                                    <label>Transactions are encrypted and secured</label>

                                </div>
                                <div className="row">
                                    <label htmlFor="">By registering you are agreeing to the <u>Terms of Use</u> and <u>Privacy Policy</u></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                   
           </div>
       </div>
            </div>
            
    );
}

export default Content
