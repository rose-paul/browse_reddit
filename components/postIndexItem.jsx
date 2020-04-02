import React, { useEffect, useState } from 'react';

const PostIndexItem = ({ data, handleClick }) => {
    return (
        <ul>
            <li>Author: {data.author}</li>
            <li onClick={() => handleClick(data.url, 'postitem')}>
                Title: {data.title}
            </li>
            <li>Text: {data.selftext}</li>
        </ul>
    )
}

export default PostIndexItem;