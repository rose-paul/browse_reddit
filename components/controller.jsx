import React, { useEffect, useState } from 'react';
import useSubreddits from './useSubreddits';

const Controller = () => {

    const { subReddits } = useSubreddits();
    const [posts, setPosts] = useState();
    const [postDisplay, setPostDisplay] = useState();
    return (
        <p>hi</p>
    )


}

export default Controller;