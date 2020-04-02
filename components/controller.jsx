import React, { useEffect, useState } from 'react';
import SubList from './subListRender';

const Controller = () => {


    const [posts, setPosts] = useState("Select a subreddit!");
    const [postDisplay, setPostDisplay] = useState();

    const handleClick = (data, type) => {
        // case 1 sublist
    }

    return (
        <div className="controller">
            <SubList />
            {posts}
        </div>
    )


}

export default Controller;