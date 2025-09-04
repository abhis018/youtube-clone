import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from "./LiveChat";

const WatchPage = () => {

  const [searchParams] = useSearchParams();

  return (
    <div className='flex flex-col w-full'>
      <div className='ml-12 mt-5 flex'>
        <div>
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
          <div className='w-full'>
            <LiveChat/>
          </div>
      </div>
      <CommentsContainer/>
    </div>
  )
}

export default WatchPage