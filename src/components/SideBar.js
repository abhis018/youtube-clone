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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return false;

  return (
    <div className=" p-4 shadow-lg ">
      <Link to="/"><div className="flex items-center">
        <IoMdHome className="text-2xl"/>
        <p className="pl-3">Home</p>
      </div></Link>
      <div className="flex items-center">
        <SiYoutubeshorts className="text-2xl" />
        <p className="pl-3">Shorts</p>
      </div>
      <div className="flex items-center ">
        <MdSubscriptions className="text-2xl" />
        <p className="pl-3">Subscription</p>
      </div>
      <div className="flex items-center ">
        <SiYoutubemusic className="text-2xl" />
        <p className="pl-3">YouTube Music</p>
      </div><hr className=" border-gray-300 border" />
      <h1 className="font-bold pt-5">You </h1>
      <div className="flex items-center ">
        <AiOutlineHistory className="text-2xl" />
        <p className="pl-3">History</p>
      </div>
      <div className="flex items-center ">
        <MdOutlinePlaylistPlay className="text-2xl"/>
        <p className="pl-3">Playlists</p>
      </div>
      <div className="flex items-center ">
        <MdOutlineVideoSettings className="text-2xl" />
        <p className="pl-3">Your videos</p>
      </div>
      <div className="flex items-center ">
        <MdOutlineWatchLater className="text-2xl" />
        <p className="pl-3">Watch Later</p>
      </div>
      <div className="flex items-center ">
        <GoThumbsup  className="text-2xl"/>
        <p className="pl-3">Liked videos</p>
      </div>
      <div className="flex items-center ">
        <MdOutlineFileDownload  className="text-2xl"/>
        <p className="pl-3">Downloads</p>
      </div><hr className=" border-gray-300 border"/>
      <h1 className="font-bold pt-5">Explore</h1>
      <div className="flex items-center ">
        <FiShoppingBag className="text-2xl" />
        <p className="pl-3">Shoping</p>
      </div>
      <div className="flex items-center ">
        <FaMusic  className="text-2xl"/>
        <p className="pl-3">Music</p>
      </div>
      <div className="flex items-center ">
        <PiFilmSlateFill className="text-2xl" />
        <p className="pl-3">Flims</p>
      </div>
      <div className="flex items-center ">
        <MdOutlineLiveTv  className="text-2xl"/>
        <p className="pl-3">Live</p>
      </div>
      <div className="flex items-center ">
        <SiYoutubegaming  className="text-2xl"/>
        <p className="pl-3">Gaming</p>
      </div>
      <div className="flex items-center ">
        <FaRegNewspaper  className="text-2xl"/>
        <p className="pl-3">News</p>
      </div>
      <div className="flex items-center ">
        <TfiCup  className="text-2xl"/>
        <p className="pl-3">Sport</p>
      </div>
      <div className="flex items-center ">
        <GiGraduateCap className="text-2xl" />
        <p className="pl-3">Courses</p>
      </div>
      <div className="flex items-center ">
        <MdOutlinePodcasts className="text-2xl" />
        <p className="pl-3">Podcasts</p>
      </div>
    </div>
  )
}

export default SideBar