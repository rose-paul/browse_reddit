import React from 'react';
import useModal from './modal';

const PostIndexItem = ({ data, handleClick, handlePostClick }) => {
    return (
        <ul>
            <li>Author: {data.author}</li>
            <li><img src={data.thumbnail} alt=""/></li> 
            <li onClick={() => handlePostClick( data)}>
                Title: {data.title}
            </li>
            <li>Text: {data.selftext}</li>
        </ul>
    )
}

export default PostIndexItem;