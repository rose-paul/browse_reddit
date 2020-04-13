import React from 'react';

const PostShow = ({ data }) => {

  function isImage(url) {
    let len = url.length;
    let start = len - 4;
    let arr = ['.jpg', '.png', '.gif', '.jpeg']
    let accepted = new Set(arr)
    if (accepted.has(url.slice(start))) return true;
    return false;
  }
    
    // data from api not too organided, parse whether it's a video or image/link
    const source = data.media && data.media.reddit_video ? 'video' : 'not-vid'
    let media;

    if (source === 'video') {
      media = <li>
        <video src={data.media.reddit_video.fallback_url} id="post-show-img"/>
        <a href={data.media.reddit_video.fallback_url} >Video Link</a>
      </li>
    } else {
      if (isImage(data.url)) {
      media =  <li>
        <img src={data.url} id="post-show-img" />
      </li>
      } else {
        media = <li><a href={data.url}>Link</a></li>
      }
    }

    const text = data.selftext ? (
      <li>{data.selftext}</li>
    ) : (null);

    return (
      <ul>
        <li>Posted by {data.author}</li>
        <li>
          <b>{data.title}</b>
        </li>
        {text}
        {media}
      </ul>
    )
}

export default PostShow;