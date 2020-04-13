import React from 'react';
// media:
// reddit_video:
// fallback_url: "https://v.redd.it/60h39g7psks41/DASH_1080?source=fallback"
// height: 1080
// width: 1920
// scrubber_media_url: "https://v.redd.it/60h39g7psks41/DASH_96"
// dash_url: "https://v.redd.it/60h39g7psks41/DASHPlaylist.mpd"
// duration: 27
// hls_url: "https://v.redd.it/60h39g7psks41/HLSPlaylist.m3u8"
// is_gif: false
// transcoding_status: "completed"

const PostShow = ({ data }) => {


  function parseMedia(url) {
    let len = url.length;
    let start = len - 4;
    let arr = ['.jpg', '.png', '.gif', '.jpeg']
    let accepted = new Set(arr)
    if (accepted.has(url.slice(start))) return true;
    return false;
  }
    
    const source = data.media && data.media.reddit_video.fallback_url ? 'video' : 'img'
    let media;
    if (source === 'video') {
      media = <li>
        <video src={data.media.reddit_video.fallback_url} id="post-show-img"/>
        <a href={data.media.reddit_video.fallback_url} >Video Link</a>
      </li>
    } else if (source === 'img') {
      if (parseMedia(data.url)) {
      media =  <li>
        <img src={data.url} id="post-show-img" />
      </li>
      } else {
        media = <li><a href={data.url}>Link</a></li>
      }
    } else {
      media = null
    }

    const text = data.selftext ? (
      <li>{data.selftext}</li>
    ) : (null);

    return data ? (
      <ul>
        <li>Posted by {data.author}</li>
        <li>
          <b>{data.title}</b>
        </li>
        {text}
        {media}
      </ul>
    ) : (
      <p>getting post</p>
    );
}

export default PostShow;