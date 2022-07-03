import React from 'react';
import Posts from '../Posts/Posts';
import About from '../About/About';
import './main.css';

function Main() {
  return (
    <>
      <main>
        <div className="max-width">
          <Posts />
          <About />
        </div>
      </main>
    </>
  );
}

export default Main;
