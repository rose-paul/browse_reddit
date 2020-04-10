import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchIndex from './searchRender';

const Search = () => {

    const [subreddits, setSubreddits] = useState();

    function updateQuery(data) {
        console.log(data)
        axios.get(`https://www.reddit.com/subreddits/search.json?q=${data}`)
            .then(res => {
                setSubreddits(res.data.data.children)
            })
    }

    return (
        <div>
        <form action="">
            <input type="text" 
            onChange={(e) => updateQuery(e.target.value) }
            placeholder="Search for something"
            />
        </form>
        <SearchIndex data={subreddits}/>
        </div>
        
    )
}

export default Search;