import React, { useEffect, useState } from 'react';

const SearchIndex = ({ data }) => {

    const [selected, setSelected] = useState("")

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
    return data ? (
    <ul className="subreddit-list">
        {data.map(
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
        )
        }
    </ul>

) : null 
        }


export default SearchIndex;