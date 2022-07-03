import React from 'react';
import Posts from '../Posts/Posts';
import About from '../About/About';
import './main.css';
import { useEffect, useState } from 'react';

function Main() {
  const [postsData, setPostsData] = useState([]);

  const fetchData = async () => {
    const data = await (await fetch('/data.json')).json();
    setPostsData(data.posts);
    console.log(data.posts);
  };

  useEffect(() => {
    fetchData();
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
