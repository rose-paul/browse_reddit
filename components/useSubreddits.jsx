import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useSubreddits = () => {
    const [subredditList, setList] = useState()

    useEffect(() => {
        axios.get("https://www.reddit.com/subreddits/popular.json")
            .then( res => {
                setList(res.data.data.children)}
                )
    }, [])
    console.log(subredditList)
    return { subredditList }
}

export default useSubreddits;