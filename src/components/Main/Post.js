import React from 'react';

function Post() {
  return (
    <>
      <a href="post-view.html" class="post">
        <img src="./images/post-img6.jpg" alt="" />
        <div class="contents-wrap">
          {/* <!-- category --> */}
          <dl class="category">
            <dt class="a11y-hidden">Category</dt>
            <dd>Life</dd>
            <dd>Style</dd>
          </dl>
          {/* <!-- //category --> */}

          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

          {/* <!-- author --> */}
          <dl class="author-wrap">
            <dt class="a11y-hidden">Author</dt>
            <dd class="author">
              <img src="./images/profile.jpg" alt="" /> Chilli
            </dd>
            <dt class="a11y-hidden">Created</dt>
            <dd class="created">2022.05.25</dd>
          </dl>
          {/* <!-- //author --> */}

          <p class="post-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            illum nostrum perferendis voluptas, voluptate soluta corrupti dolore
            quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
            cum incidunt repudiandae vel. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Inventore illum nostrum perferendis
            voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque!
            Exercitationem est facilis dolor quas odio cum incidunt repudiandae
            vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Inventore illum nostrum perferendis voluptas, voluptate soluta
            corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
            dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Inventore illum nostrum
            perferendis voluptas, voluptate soluta corrupti dolore quidem.
            Placeat, eaque! Exercitationem est facilis dolor quas odio cum
            incidunt repudiandae vel."
          </p>
        </div>
      </a>
    </>
  );
}

export default Post;
