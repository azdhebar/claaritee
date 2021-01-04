import React from 'react';
import logo from '../assets/logo.svg'
import './Nav.css';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg" >
  
  <div className="container-fluid">
 
    <img src={logo} height="30" className="d-inline-block align-top"/>


    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse " id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-3 mx-5">
        <li className="nav-item ">
          <a className="nav-link active mx-4 my-2"    aria-current="page" href="#"><h5>Product Tour</h5></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-4 my-2" href="#"><h5>Pricing</h5></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-4 my-2" href="#"><h5>Contact Us</h5></a>
        </li>

      </ul>
    

    
            <form class=" input-group w-auto">
              <hr/>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-3 mx-5">
        <li className="nav-item navLinks">
                                <button className="btn btn-info my-2" style={{borderRadius:5,padding:8}}><label style={{ fontSize: 20}}> SIGNUP FOR FREE</label></button>
                            </li>
        <li className="nav-item">
          <a className="nav-link active mx-4 my-2" href="#"><h5>SIGNIN</h5></a>
                            </li>
                            </ul>
      </form>
    </div>
  
  </div>

</nav>
    );
}
export default Nav;