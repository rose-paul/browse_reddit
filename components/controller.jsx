import React, { useState } from 'react';
import SubList from './subListRender';
import SubPostsRender from './subPostsList';
import PostShow from './postShow';

const Controller = ({ handlePostClick }) => {

    const [posts, setPosts] = useState("Select a subreddit!");
    const [postDisplay, setPostDisplay] = useState("Select a post!");

    function handleClick(data, type) {
        switch (type) {
            case 'sublist':
                return setPosts(
                <SubPostsRender url={data} handleClick={handleClick} handlePostClick={handlePostClick} />
                )
            case 'postitem':
                return setPostDisplay(
                <PostShow data={data}/>
                )
            default:
                return
        }
    }

    return (
        <div className="controller">
            <SubList handleClick={handleClick}/>
            {posts}
            {postDisplay}
        </div>
    )


}

export default Controller;