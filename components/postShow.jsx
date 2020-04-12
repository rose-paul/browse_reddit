import React from 'react';

const PostShow = ({ data }) => {

    const image = data.url ? data.url : "";

    return data ? (
      <ul>
        <li>Posted by  {data.author}</li>
        <li>
          <b>{data.title}</b>
        </li>
        <li>{data.selftext}</li>
        <li>
          <img src={image} alt="" />
        </li>
      </ul>
    ) : (
      <p>getting post</p>
    );
}

export default PostShow;