import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/Constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoList = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideos();
  },[])

  
  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      console.log(json);

      if (json?.items?.length) {
        setVideos(json.items);
      } else {
        console.warn("No videos found in response", json);
      }
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    }
  };
  return (
    <div className='flex flex-wrap'>
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}><VideoCard info={video}/></Link>
      ))}
    </div>
  )
}

export default VideoList