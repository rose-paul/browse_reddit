import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostShow = ({ data }) => {

    const [info, setInfo] = useState(data)

    // useEffect(() => {
    //     axios.get(url + '.json')
    //     .then( res => {
    //         setData(res.data[0].data.children[0].data)
    //     })
    // }, []);
    const image = info.url ? info.url : "";

    return data ? (
        <ul>
            <li>Author: {info.author}</li>
            <li>Title: {info.title}</li>
            <li>Text: {info.selftext}</li>
            <li><img src={image} alt=""/></li>
        </ul>
    ) : (
        <p>getting post</p>
    )
}

export default PostShow;