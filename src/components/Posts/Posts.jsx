import React from 'react';
import './posts.css';
import Post from '../Post/Post';
// import '../Wrapbox/wrapbox.css';

function Posts({ postsData }) {
  // console.log(postsData[0].thumbnail);
  return (
    <>
      <h2 className="a11y-hidden">Post</h2>
      <ul className="posts">
        {/* {postsData && <Post postThumbnail={postsData[0].thumbnail} />} */}

        <Post postThumbnail={postsData[5].thumbnail} />
        <Post postThumbnail={postsData[4].thumbnail} />
        <Post postThumbnail={postsData[3].thumbnail} />
        <Post postThumbnail={postsData[2].thumbnail} />
        <Post postThumbnail={postsData[1].thumbnail} />
        <Post postThumbnail={postsData[0].thumbnail} />

        {/* <Post
          postId={postsData[0].id}
          postThumbnail={postsData[0].thumbnail}
          postTitle={postsData[0].title}
          postMainBg={postsData[0].mainBg}
          postCategory={postsData[0].category}
          postProfileImg={postsData[0].profileImg}
          postContents={postsData[0].contents}
        />
        <Post
          postId={postsData[1].id}
          postThumbnail={postsData[1].thumbnail}
          postTitle={postsData[1].title}
          postMainBg={postsData[1].mainBg}
          postCategory={postsData[1].category}
          postProfileImg={postsData[1].profileImg}
          postContents={postsData[1].contents}
        />
        <Post
          postId={postsData[2].id}
          postThumbnail={postsData[2].thumbnail}
          postTitle={postsData[2].title}
          postMainBg={postsData[2].mainBg}
          postCategory={postsData[2].category}
          postProfileImg={postsData[2].profileImg}
          postContents={postsData[2].contents}
        />
        <Post
          postId={postsData[3].id}
          postThumbnail={postsData[3].thumbnail}
          postTitle={postsData[3].title}
          postMainBg={postsData[3].mainBg}
          postCategory={postsData[3].category}
          postProfileImg={postsData[3].profileImg}
          postContents={postsData[3].contents}
        />
        <Post
          postId={postsData[4].id}
          postThumbnail={postsData[4].thumbnail}
          postTitle={postsData[4].title}
          postMainBg={postsData[4].mainBg}
          postCategory={postsData[4].category}
          postProfileImg={postsData[4].profileImg}
          postContents={postsData[4].contents}
        />
        <Post
          postId={postsData[5].id}
          postThumbnail={postsData[5].thumbnail}
          postTitle={postsData[5].title}
          postMainBg={postsData[5].mainBg}
          postCategory={postsData[5].category}
          postProfileImg={postsData[5].profileImg}
          postContents={postsData[5].contents}
        /> */}
      </ul>
    </>
  );
}

export default Posts;
