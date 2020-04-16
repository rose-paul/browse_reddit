import React from 'react'; 

const SubredditList = ({subredditDefault, subredditQuery, state, dispatch, handleClick}) => {

    //use subredditDefault (most popular) unless there are query results
    let toMap = subredditQuery ? subredditQuery : subredditDefault

    function postClicked(info) {
        handleClick(info.data.url)
        dispatch({type: 'select', data: info.data.id})
    }
    
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
                            <ul id={id} onClick={() => postClicked(info)} className={state.select && state.id === id ? 'selected' : null}>
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