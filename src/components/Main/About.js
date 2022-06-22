import React from 'react';

function About() {
  return (
    <>
      <aside class="about">
        <h2>About Me</h2>
        <img src="./images/profile.jpg" alt="" class="user-profile" />
        <p class="user-name">Chilli</p>
        <p class="user-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <h3>Categories</h3>
        <ul class="categories">
          <li>
            <a href="#">Life</a>
          </li>
          <li>
            <a href="#">Style</a>
          </li>
          <li>
            <a href="#">Tech</a>
          </li>
          <li>
            <a href="#">Sport</a>
          </li>
          <li>
            <a href="#">Photo</a>
          </li>
          <li>
            <a href="#">Develop</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
        </ul>
        <h3>Follow</h3>
        <ul class="sns">
          <li>
            <a href="#">
              <img src="./assets/Facebook.svg" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./assets/Twitter.svg" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./assets/Instagram.svg" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./assets/Github.svg" alt="GitHub" />
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default About;
