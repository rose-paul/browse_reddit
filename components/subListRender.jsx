import React from 'react';
import useSubreddits from './subListHook';

const SubList = ({ handleClick }) => {
    
    const { subredditList } = useSubreddits({});

    return subredditList 
    ? (
        <ul className="subreddit-list">
                {subredditList.map(
                info => 
                (
                    <>
                    <li onClick={() => handleClick(info.data.url)}>
                        Display Name: {info.data.url}
                    </li>
                    <li><img src={info.data.icon_img} alt=""/></li>
                    <li>URL: {info.data.url}</li>
                    </>
                )
                )}
        </ul>
    ) : (
        <p>fetching subreddits</p>
    )

}

export default SubList;
