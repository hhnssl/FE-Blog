import React from 'react';
import profileImg from '../../images/profile.jpg';

import './author.css';

function Author() {
  return (
    <>
      <dl className="author-wrap">
        <dt className="a11y-hidden">Author</dt>
        <dd className="author">
          <img src={profileImg} alt="" /> Chilli
        </dd>
        <dt className="a11y-hidden">Created</dt>
        <dd className="created">2022.05.25</dd>
      </dl>
    </>
  );
}

export default Author;
