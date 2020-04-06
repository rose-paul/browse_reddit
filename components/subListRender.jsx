import React from 'react';
import useSubreddits from './subListHook';

const SubList = ({ handleClick }) => {
    
    const { subredditList } = useSubreddits({});

    return subredditList 
    ? (
        <ul className="subreddit-list">
                {subredditList.map(
                info => {
                        const image = info.data.icon_img ? (
                          <img src={info.data.icon_img} alt="" />
                        ) : (
                          <img src="/public/react_reddit.png" alt="" />
                        );
                    return (
                      <>
                        <li onClick={() => handleClick(info.data.url)}>
                          <b>{info.data.url}</b>
                        </li>
                        <li>{image}</li>
                      </>
                    );
                }
                )}
        </ul>
    ) : (
        <p>fetching subreddits</p>
    )

}

export default SubList;
