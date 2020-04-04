import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostShow = ({ url }) => {

    const [data, setData] = useState()

    useEffect(() => {
        axios.get(url + '.json')
        .then( res => {
            setData(res.data[0].data.children[0].data)
        })
    }, []);

    return data ? (
        <ul>
            <li>Author: {data.author}</li>
            <li>Title: {data.title}</li>
            <li>Text: {data.selftext}</li>
        </ul>
    ) : (
        <p>getting post</p>
    )
}

export default PostShow;