import React from 'react';

const Search = ({updateQuery}) => {

    return (
        <form action="">
            <input type="text" 
            onChange={(e) => updateQuery(e.target.value) }
            placeholder="Search for something"
            />
        </form>
    )
}

export default Search;