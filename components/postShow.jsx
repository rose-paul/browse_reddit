import React from 'react';

const PostShow = ({ data }) => {

    const image = data.url ? data.url : "";

    return data ? (
        <ul>
            <li onClick={() => useModal(false, null)} >Author: {data.author}</li>
            <li>Title: {data.title}</li>
            <li>Text: {data.selftext}</li>
            <li><img src={image} alt=""/></li>
        </ul>
    ) : (
        <p>getting post</p>
    )
}

export default PostShow;