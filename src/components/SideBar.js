import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { AiOutlineHistory } from "react-icons/ai";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoThumbsup } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { FaMusic } from "react-icons/fa";
import { PiFilmSlateFill } from "react-icons/pi";
import { MdOutlineLiveTv } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";

const SideBar = () => {
  return (
    <div>
      <div className="flex items-center p-2">
        <IoMdHome/>
        <p className="pl-3">Home</p>
      </div>
      <div className="flex items-center p-2">
        <SiYoutubeshorts />
        <p className="pl-3">Shorts</p>
      </div>
      <div className="flex items-center p-2">
        <MdSubscriptions />
        <p className="pl-3">Subscription</p>
      </div>
      <div className="flex items-center p-2">
        <SiYoutubemusic />
        <p className="pl-3">YouTube Music</p>
      </div>
      <div className="flex items-center p-2">
        <AiOutlineHistory />
        <p className="pl-3">History</p>
      </div>
      <div className="flex items-center p-2">
        <MdOutlinePlaylistPlay/>
        <p className="pl-3">Playlists</p>
      </div>
      <div className="flex items-center p-2">
        <MdOutlineVideoSettings />
        <p className="pl-3">Your videos</p>
      </div>
      <div className="flex items-center p-2">
        <MdOutlineWatchLater />
        <p className="pl-3">Watch Later</p>
      </div>
      <div className="flex items-center p-2">
        <GoThumbsup />
        <p className="pl-3">Liked videos</p>
      </div>
      <div className="flex items-center p-2">
        <MdOutlineFileDownload />
        <p className="pl-3">Downloads</p>
      </div>
      <div className="flex items-center p-2">
        <FiShoppingBag />
        <p className="pl-3">Shoping</p>
      </div>
      <div className="flex items-center p-2">
        <FaMusic />
        <p className="pl-3">Music</p>
      </div>
      <div className="flex items-center p-2">
        <PiFilmSlateFill />
        <p className="pl-3">Flims</p>
      </div>
      <div className="flex items-center p-2">
        <MdOutlineLiveTv />
        <p className="pl-3">Live</p>
      </div>
      <div className="flex items-center p-2">
        <SiYoutubegaming />
        <p className="pl-3">Gaming</p>
      </div>
      <div className="flex items-center p-2">
        <FaRegNewspaper />
        <p className="pl-3">News</p>
      </div>
      <div className="flex items-center p-2">
        <TfiCup />
        <p className="pl-3">Sport</p>
      </div>
      <div className="flex items-center p-2">
        <GiGraduateCap />
        <p className="pl-3">Courses</p>
      </div>
      <div className="flex items-center p-2">
        <MdOutlinePodcasts />
        <p className="pl-3">Podcasts</p>
      </div>
    </div>
  )
}

export default SideBar