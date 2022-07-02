import React from 'react';

import '../css/header.css';
import '../css/button.css';

import { Link } from 'react-router-dom';
import logoImg from '../../assets/Logo.svg';
import profileImg from '../../assets/profile.jpg';
import writeImg from '../../assets/icon-modify-white.svg';
import logOutImg from '../../assets/icon-logout.svg';

function Header() {
  return (
    <>
      <header>
        <div className="max-width">
          <h1>
            <Link to="/">
              <img src={logoImg} alt="My Blog" />
            </Link>
          </h1>
          <ul>
            {/* <!-- 로그인 --> */}
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
            {/* <!-- //로그인 --> */}

            {/* <!-- 로그아웃 --> */}
            {/* <!-- */}
            {/* <li>
              <Link to="/" className="button gray">
                <img src="./assets/icon-login.svg" alt="" />
                <span>Login</span>
              </Link>
            </li>
            <li className="only-pc">
              <Link to="/" className="button gray">
                <img src="./assets/icon-register.svg" alt="" />
                <span>Register</span>
              </Link>
            </li> */}
            {/* --> */}
            {/* <!--// 로그아웃 --> */}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
