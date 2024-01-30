// M_O_D_U_L_E & L_I_B_R_A_R_Y
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// C_O_M_P_O_N_E_N_T_S

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    document.title = `Wethar App | ${location.pathname.substring(1) || 'Home'}`;
  }, [location]);
  return (
    <div>
      <nav className="navbar text-black navbar-expand-md">
        <div className="container-fluid align-items-baseline">
          <button className="navbar-toggler" type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvas"
            aria-controls="navbarOffcanvas"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" id="navbarOffcanvas" tabIndex="-1" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-dark fw-bold" id="offcanvasNavbarLabel">lAX</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <ul className="navbar-nav mb-2 mb-lg-0 offcanvas-body">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About" >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Contect" >
                  Contect
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About" >
                  Food
                </Link>
              </li>
              <li className="nav-item ms-auto">
                <Link className="nav-link active" aria-current="page" to="/Login">
                  <i className="fa-regular fa-user me-1"></i> Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}



