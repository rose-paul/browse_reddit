import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useDefaultSubreddits = () => {
    const [defaultSubs, setList] = useState()

    useEffect(() => {
        axios.get("https://www.reddit.com/subreddits/popular.json")
            .then( res => {
                setList(res.data.data.children)}
                )
    }, [])
    return { defaultSubs };
}

export default useDefaultSubreddits;