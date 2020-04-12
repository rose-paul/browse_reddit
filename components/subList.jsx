import React, { useState } from 'react';
import useSubreddits from './subListHook';
import SubredditList from './subListRender';

const SubList = ({ handleClick, subreddits }) => {
    
    const { subredditList } = useSubreddits({});
    const [selected, setSelected] = useState("");

    function updateStyling(info) {
      let id = info.data.id
      if (selected) {
        let el = document.getElementById(selected);
        el.classList.remove('selected');
      }
      setSelected(id)
      let newEl = document.getElementById(id);
      newEl.classList.add('selected')
      handleClick(info.data.url)
    }
    

    return (
      <SubredditList 
        subredditDefault={subredditList} 
        subredditQuery={subreddits}
        updateStyling={updateStyling}
        />
    )
    

}

export default SubList;
