import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="flex flex-col items-center">
        <Link to="/"><div className="pt-8 flex flex-col items-center">
            <IoMdHome className="text-2xl"/>
            <p className="text-xs text-center">Home</p>
        </div></Link>
        <div className="pt-8 flex flex-col items-center">
            <SiYoutubeshorts className="text-2xl" />
            <p className="text-xs text-center">Shorts</p>
        </div>
        <div className="pt-8 flex flex-col items-center">
            <MdSubscriptions className="text-2xl" />
            <p className="text-xs text-center">Subscription</p>
        </div>
        <div className="pt-8 flex flex-col items-center">
            <SiYoutubemusic  className="text-2xl"/>
            <p className="text-xs text-center">YouTube Music</p>
        </div>
        <div className="pt-8 flex flex-col items-center">
            <FaRegCircleUser className="text-2xl" />
            <p className="text-xs text-center">You</p>
        </div>
        <div className="pt-8 flex flex-col items-center">
            <MdOutlineFileDownload className="text-2xl" />
            <p className="text-xs text-center">Downloads</p>
        </div>
    </div>
  )
}

export default SideMenu