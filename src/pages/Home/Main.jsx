import React from 'react';
import Post from './Main/Post';
import About from './Main/About';
import '../css/posts.css';
import '../css/main.css';

function MainContainer() {
  return (
    <>
      <main>
        {/* <!-- posts --> */}
        <div class="max-width">
          <h2 class="a11y-hidden">Post</h2>
          <ul class="posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </ul>
          {/* <!-- //posts --> */}

          {/* <!-- about -->*/}
          <About />
          {/*<!-- //about --> */}
        </div>
      </main>
    </>
  );
}

export default MainContainer;
