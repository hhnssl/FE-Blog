import React from 'react';

function Header() {
  return (
    <>
      <header>
        <div className="max-width">
          <h1>
            <a href="./">
              <img src="./assets/Logo.svg" alt="My Blog" />
            </a>
          </h1>
          <ul>
            <li className="profile-img">
              <a href="#">
                <img src="./assets/profile.jpg" alt="My Page" />
              </a>
            </li>
            <li>
              <a href="#" className="button">
                <img src="./assets/icon-modify-white.svg" alt="" />
                <span>Write</span>
              </a>
            </li>
            <li>
              <button className="button white">
                <img src="./assets/icon-logout.svg" alt="" />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
