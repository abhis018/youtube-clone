import React from 'react'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {

  const [searchParams] = useSearchParams();

  return (
    <div className='ml-12 mt-5'>
      <iframe className="rounded-xl" 
        width="750" 
        height="400" 
        src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
        </iframe>
    </div>
  )
}

export default WatchPage