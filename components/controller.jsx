import React, { useEffect, useState } from 'react';
import useSubreddits from './useSubreddits';

const Controller = () => {

    const { subredditList } = useSubreddits({});
    const [posts, setPosts] = useState();
    const [postDisplay, setPostDisplay] = useState();
    console.log(subredditList)
    return (
        <p>hi</p>
    )


}

export default Controller;