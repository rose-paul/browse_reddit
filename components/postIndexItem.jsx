import React from 'react';

const PostIndexItem = ({ data, handlePostClick }) => {

    const image = data.thumbnail ? (
      <img src={data.thumbnail} alt="" />
    ) : (
      <img src="/public/react_reddit.png" alt="" />
    );

    return (
      <ul onClick={() => handlePostClick(data)}>
        <li>{image}</li>
        <div>
          <li>
            <b>{data.title}</b>
          </li>
          <li>Posted by{data.author}</li>
        </div>
      </ul>
    );}

export default PostIndexItem;