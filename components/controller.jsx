import React, { useState } from 'react';
import SubList from './subList';
import SubPostsRender from './subPostsList';
import Search from './search';
import axios from 'axios';

const Controller = ({ handlePostClick }) => {

    const [posts, setPosts] = useState();
    const [subreddits, setSubreddits] = useState();

    function updateQuery(data) {
      axios.get(`https://www.reddit.com/subreddits/search.json?q=${data}`)
        .then(res => {
          setSubreddits(res.data.data.children)
        })
    }

    function handleClick(data) {
        return setPosts(
        <SubPostsRender url={data} handlePostClick={handlePostClick} />
            )
    }

    return (
      <div>
        <h2>What's Popular on Reddit?</h2>
        <div className="controller">
          <Search updateQuery={updateQuery} />
          <SubList handleClick={handleClick} 
                  subreddits={subreddits}
          />
          {posts}
        </div>
      </div>
    );


}

export default Controller;