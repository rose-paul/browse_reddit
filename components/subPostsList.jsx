import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostIndexItem from './postIndexItem';


const SubPostsRender = ({ url, handleClick, handlePostClick }) => {

    const [posts, setPosts] = useState()

    useEffect(() => {
        axios.get(`https://www.reddit.com${url}hot.json`)
            .then(res => {
                setPosts(res.data.data.children)
            }
            )
    }, [posts])

    return posts ? (
        <ul>
            {
                posts.map( 
                    post => (
                    <PostIndexItem data={post.data} handleClick={handleClick} handlePostClick={handlePostClick} />
                )
                )
            }
        </ul>
    ) : (
        <p>fetching posts</p>
    )
}

export default SubPostsRender;