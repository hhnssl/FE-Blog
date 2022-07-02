import React from 'react';
import { Link } from 'react-router-dom';
import postImg from '../../../images/post-img6.jpg';
import profileImg from '../../../images/profile.jpg';

import '../../css/post.css';
import '../../css/author.css';
import '../../css/category.css';

function Post() {
  return (
    <>
      <li>
        <Link to="/post-view" className="post">
          <article>
            <img src={postImg} alt="" />
            <div className="contents-wrap">
              {/* <!-- category --> */}
              <dl className="category">
                <dt className="a11y-hidden">Category</dt>
                <dd>Life</dd>
                <dd>Style</dd>
              </dl>
              {/* <!-- //category --> */}

              <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

              {/* <!-- author --> */}
              <dl className="author-wrap">
                <dt className="a11y-hidden">Author</dt>
                <dd className="author">
                  <img src={profileImg} alt="" /> Chilli
                </dd>
                <dt className="a11y-hidden">Created</dt>
                <dd className="created">2022.05.25</dd>
              </dl>
              {/* <!-- //author --> */}

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
