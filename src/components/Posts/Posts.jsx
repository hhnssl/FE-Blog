import React from 'react';
import './posts.css';
import Post from '../Post/Post';
// import '../Wrapbox/wrapbox.css';

function Posts() {
  return (
    <>
      <h2 className="a11y-hidden">Post</h2>
      <ul className="posts">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>
    </>
  );
}

export default Posts;
