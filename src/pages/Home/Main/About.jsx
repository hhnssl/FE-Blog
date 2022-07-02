import React from 'react';
import '../../css/about.css';
import { Link } from 'react-router-dom';

import profileImg from '../../../images/profile.jpg';
import facebookImg from '../../../assets/Facebook.svg';
import twitterImg from '../../../assets/Twitter.svg';
import instagramImg from '../../../assets/Instagram.svg';
import githubImg from '../../../assets/Github.svg';

function About() {
  return (
    <>
      <aside className="about">
        <h2>About Me</h2>
        <img src={profileImg} alt="" className="user-profile" />
        <p className="user-name">Chilli</p>
        <p className="user-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <h3>Categories</h3>
        <ul className="categories">
          <li>
            <Link to="/">Life</Link>
          </li>
          <li>
            <Link to="/">Style</Link>
          </li>
          <li>
            <Link to="/">Tech</Link>
          </li>
          <li>
            <Link to="/">Sport</Link>
          </li>
          <li>
            <Link to="/">Photo</Link>
          </li>
          <li>
            <Link to="/">Develop</Link>
          </li>
          <li>
            <Link to="/">Music</Link>
          </li>
        </ul>
        <h3>Follow</h3>
        <ul className="sns">
          <li>
            <Link to="/">
              <img src={facebookImg} alt="Facebook" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={twitterImg} alt="Twitter" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={instagramImg} alt="Instagram" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={githubImg} alt="GitHub" />
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default About;
