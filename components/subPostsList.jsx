import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostIndexItem from './postIndexItem';
import Loader from "react-loader-spinner";


const SubPostsRender = ({ url, handlePostClick }) => {

    const [posts, setPosts] = useState()

    useEffect(() => {
        axios.get(`https://www.reddit.com${url}hot.json`)
            .then(res => {
                setPosts(res.data.data.children)
            }
            )
    }, [url])

    function updateFilter(type) {
        return axios.get(`https://www.reddit.com${url}${type}.json`)
                .then( res => {
                  setPosts(res.data.data.children)
                })
    }

    return posts ? (
      <div>
        <button onClick={() => updateFilter("new")}>New</button>
        <button onClick={() => updateFilter("hot")}>Hot</button>
      <ul>
        {posts.map((post) => (
          <PostIndexItem data={post.data} handlePostClick={handlePostClick} />
        ))}
      </ul>
      </div>
    ) : (
      <Loader type="Grid" color="white" className="loading" />
    );
}

export default SubPostsRender;