import React, { useState } from 'react';
import SubList from './subList';
import SubPostsRender from './subPostsList';
import Search from './search';
import axios from 'axios';

const Controller = ({ handlePostClick }) => {

    const [posts, setPosts] = useState(); // post from chosen subreddit
    const [subreddits, setSubreddits] = useState(); //subreddit list state based on query, props for subreddit list

    function updateQuery(data) { //pass as props to search component
      axios.get(`https://www.reddit.com/subreddits/search.json?q=${data}`)
        .then(res => {
          setSubreddits(res.data.data.children)
        })
    }

    function handleClick(data) { //set posts state if click on subreddit
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