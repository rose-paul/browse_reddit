import React, { useState } from 'react';
import SubList from './subListRender';
import SubPostsRender from './subPostsList';


const Controller = ({ handlePostClick }) => {

    const [posts, setPosts] = useState();

    function handleClick(data, ) {
        return setPosts(
        <SubPostsRender url={data} handlePostClick={handlePostClick} />
            )
    }

    return (
      <div>
        <h2>What's Popular on Reddit?</h2>
        <div className="controller">
          <SubList handleClick={handleClick} />
          {posts}
        </div>
      </div>
    );


}

export default Controller;