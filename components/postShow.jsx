import React from 'react';

const PostShow = ({ data }) => {

    const image = data.url ? (
      <li>
        <img src={data.url} id="post-show-img" />
      </li>
    ) : (
      null
    );

    const text = data.selftext ? (
      <li>{data.selftext}</li>
    ) : (null);

    return data ? (
      <ul>
        <li>Posted by {data.author}</li>
        <li>
          <b>{data.title}</b>
        </li>
        {text}
        {image}
      </ul>
    ) : (
      <p>getting post</p>
    );
}

export default PostShow;