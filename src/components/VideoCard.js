import React from 'react'

const VideoCard = ({info}) => {
    if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const thumbnailUrl = thumbnails?.maxres?.url;
  if(!thumbnailUrl) return null;
  return (
    <div className='p-2 m-1 w-96'>
        <img className="rounded-lg" alt="thumbnails" src={thumbnailUrl}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li className='text-gray-600'>{channelTitle}</li>
            <li className='text-gray-600'>{Math.floor(statistics.viewCount/100000) / 10}M views</li>
        </ul>
    </div>
  )
}

export default VideoCard