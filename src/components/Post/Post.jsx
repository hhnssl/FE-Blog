import React from 'react';
import { Link } from 'react-router-dom';
import postImg from '../../images/post-img6.jpg';

import './post.css';
import Category from '../Category/Category';
import Author from '../Author/Author';

function Post({
  postId,
  postThumbnail,
  postTitle,
  postMainBg,
  postCategory,
  postProfileImg
}) {
  return (
    <>
      <li>
        <Link to="/post-view" className="post">
          <article>
            <img src={postThumbnail} alt="" />
            <div className="contents-wrap">
              <Category />

              <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

              <Author />

              <p className="post-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore illum nostrum perferendis voluptas, voluptate soluta
                corrupti dolore quidem. Placeat, eaque! Exercitationem est
                facilis dolor quas odio cum incidunt repudiandae vel. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                illum nostrum perferendis voluptas, voluptate soluta corrupti
                dolore quidem. Placeat, eaque! Exercitationem est facilis dolor
                quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Inventore illum nostrum
                perferendis voluptas, voluptate soluta corrupti dolore quidem.
                Placeat, eaque! Exercitationem est facilis dolor quas odio cum
                incidunt repudiandae vel. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Inventore illum nostrum
                perferendis voluptas, voluptate soluta corrupti dolore quidem.
                Placeat, eaque! Exercitationem est facilis dolor quas odio cum
                incidunt repudiandae vel."
              </p>
            </div>
          </article>
        </Link>
      </li>
    </>
  );
}

export default Post;
