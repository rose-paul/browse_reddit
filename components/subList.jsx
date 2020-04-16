import React, { useState } from 'react';
import useSubreddits from './subListHook';
import SubredditList from './subListRender';

const SubList = ({ handleClick, subreddits, state, dispatch }) => {
    
    const { subredditList } = useSubreddits({}); // default list of popular subreddits
    
    return (
      <SubredditList 
        subredditDefault={subredditList} 
        subredditQuery={subreddits}
        state={state}
        dispatch={dispatch}
        handleClick={handleClick}
        />
    )
    

}

export default SubList;
