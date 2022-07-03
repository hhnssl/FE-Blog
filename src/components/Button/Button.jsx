import React from 'react';

import './button.css';

import { Link } from 'react-router-dom';
import logoImg from '../../assets/Logo.svg';
import profileImg from '../../assets/profile.jpg';
import writeImg from '../../assets/icon-modify-white.svg';
import logOutImg from '../../assets/icon-logout.svg';
import logInImg from '../../assets/icon-login.svg';
import registerImg from '../../assets/icon-register.svg';

function Button() {
  return (
    <>
      <div className="max-width">
        <h1>
          <Link to="/">
            <img src={logoImg} alt="My Blog" />
          </Link>
        </h1>
        <ul>
          <li className="profile-img">
            <Link to="/">
              <img src={profileImg} alt="My Page" />
            </Link>
          </li>
          <li>
            <Link to="/" className="button">
              <img src={writeImg} alt="" />
              <span>Write</span>
            </Link>
          </li>
          <li>
            <button className="button white">
              <img src={logOutImg} alt="" />
              <span>Logout</span>
            </button>
          </li>

          {/* <li>
            <Link to="/" className="button gray">
              <img src={logInImg} alt="" />
              <span>Login</span>
            </Link>
          </li>
          <li className="only-pc">
            <Link to="/" className="button gray">
              <img src={registerImg} alt="" />
              <span>Register</span>
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default Button;
