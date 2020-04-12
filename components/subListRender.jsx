import React from 'react'; 

const SubredditList = ({subredditDefault, subredditQuery, updateStyling}) => {
    let toMap = subredditQuery ? subredditQuery : subredditDefault

    return toMap
        ? (
            <ul className="subreddit-list">
                {toMap.map(
                    info => {
                        const id = info.data.id
                        const image = info.data.icon_img ? (
                            <img src={info.data.icon_img} />
                        ) : (
                                <img src="https://github.com/rose-paul/browse_reddit/blob/master/public/react_reddit.png?raw=true" />
                            );
                        return (
                            <ul id={id} onClick={() => updateStyling(info)}>
                                <li>
                                    <b>{info.data.url}</b>
                                </li>
                                <li>{image}</li>
                            </ul>
                        );
                    }
                )}
            </ul>
        ) : (
            <p>fetching subreddits</p>
        )
}

export default SubredditList;