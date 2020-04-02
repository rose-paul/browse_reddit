import React, { useEffect, useState} from 'react';
import useSubreddits from './subListHook';

const SubList = () => {
    
    const { subredditList } = useSubreddits({});

    return subredditList 
    ? (
        <ul>
                {subredditList.map(
                info => 
                (
                    <>
                    <li>Display Name: {info.data.display_name_prefixed}</li>
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
