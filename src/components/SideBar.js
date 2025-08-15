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
    <div className="m-3 shadow-lg ">
      <Link to="/"><div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer">
        <IoMdHome className="text-2xl"/>
        <p className="pl-3 m-1">Home</p>
      </div></Link>
      <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer">
        <SiYoutubeshorts className="text-2xl" />
        <p className="pl-3 m-1">Shorts</p>
      </div>
      <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer">
        <MdSubscriptions className="text-2xl" />
        <p className="pl-3 m-1">Subscription</p>
      </div>
      <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer ">
        <SiYoutubemusic className="text-2xl" />
        <p className="pl-3 m-1">YouTube Music</p>
      </div><hr className=" border-gray-300 border" />
      <h1 className="font-bold pt-5">You </h1>
      <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer ">
        <AiOutlineHistory className="text-2xl" />
        <p className="pl-3 m-1">History</p>
      </div>
      <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer ">
        <MdOutlinePlaylistPlay className="text-2xl"/>
        <p className="pl-3 m-1">Playlists</p>
      </div>
      <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer ">
        <MdOutlineVideoSettings className="text-2xl" />
        <p className="pl-3 m-1">Your videos</p>
      </div>
      <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer ">
        <MdOutlineWatchLater className="text-2xl" />
        <p className="pl-3 m-1">Watch Later</p>
      </div>
      <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer ">
        <GoThumbsup  className="text-2xl"/>
        <p className="pl-3 m-1">Liked videos</p>
      </div>
      <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer ">
        <MdOutlineFileDownload  className="text-2xl"/>
        <p className="pl-3 m-1">Downloads</p>
      </div><hr className=" border-gray-300 border"/>
      <h1 className="font-bold pt-5">Explore</h1>
      <div className="flex items-center  hover:bg-gray-200 rounded-lg cursor-pointer">
        <FiShoppingBag className="text-2xl" />
        <p className="pl-3 m-1">Shoping</p>
      </div>
      <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer ">
        <FaMusic  className="text-2xl"/>
        <p className="pl-3 m-1">Music</p>
      </div>
      <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer ">
        <PiFilmSlateFill className="text-2xl" />
        <p className="pl-3 m-1">Flims</p>
      </div>
      <div className="flex items-center  hover:bg-gray-200 rounded-lg cursor-pointer">
        <MdOutlineLiveTv  className="text-2xl"/>
        <p className="pl-3 m-1">Live</p>
      </div>
      <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer ">
        <SiYoutubegaming  className="text-2xl"/>
        <p className="pl-3 m-1">Gaming</p>
      </div>
      <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer ">
        <FaRegNewspaper  className="text-2xl"/>
        <p className="pl-3 m-1">News</p>
      </div>
      <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer ">
        <TfiCup  className="text-2xl"/>
        <p className="pl-3 m-1">Sport</p>
      </div>
      <div className="flex items-center  hover:bg-gray-200 rounded-lg cursor-pointer">
        <GiGraduateCap className="text-2xl" />
        <p className="pl-3 m-1">Courses</p>
      </div>
      <div className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer ">
        <MdOutlinePodcasts className="text-2xl" />
        <p className="pl-3 m-1">Podcasts</p>
      </div>
    </div>
  )
}

export default SideBar;