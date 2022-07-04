import React from 'react';
import Posts from '../Posts/Posts';
import About from '../About/About';
import './main.css';
import { useEffect, useState } from 'react';

function Main() {
  const [postsData, setPostsData] = useState([]);

  const getData = () => {
    fetch('/data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPostsData(data.posts);
        // console.log(data.posts[0]);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main>
        <div className="max-width">
          {postsData && <Posts postsData={postsData} />}
          <About />
        </div>
      </main>
    </>
  );
}

export default Main;
