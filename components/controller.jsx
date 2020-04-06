import React, { useState } from 'react';
import SubList from './subListRender';
import SubPostsRender from './subPostsList';


const Controller = ({ handlePostClick }) => {

    const [posts, setPosts] = useState("Select a subreddit!");

    function handleClick(data, ) {
        return setPosts(
        <SubPostsRender url={data} handlePostClick={handlePostClick} />
            )
    }

    return (
        <div className="controller">
            <SubList handleClick={handleClick}/>
            {posts}
        </div>
    )


}

export default Controller;