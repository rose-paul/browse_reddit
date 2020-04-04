import React, { useEffect, useState } from 'react';
import SubList from './subListRender';
import SubPostsRender from './subPostsList';
import PostShow from './postShow';

const Controller = () => {

    const [posts, setPosts] = useState("Select a subreddit!");
    const [postDisplay, setPostDisplay] = useState("Select a post!");

    function handleClick(data, type) {
        switch (type) {
            case 'sublist':
                return setPosts(
                <SubPostsRender url={data} handleClick={handleClick} />)
            case 'postitem':
                return setPostDisplay(
                <PostShow url={data}/>
                )
            default:
                return
        }
    }

    return (
        <div className="controller">
            <SubList handleClick={handleClick}/>
            <p>{posts}</p>
            <p>{postDisplay}</p>
        </div>
    )


}

export default Controller;