import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from "react-icons/im";
import { FaCircleUser } from "react-icons/fa6";
import img from "../assets/you-tube-logo-without-background-c21e.png"

const Header = () => {
  return (
    <div className="grid grid-flow-col p-2 shadow-lg">
        <div className="flex col-span-1"> 
            <GiHamburgerMenu size={25} className="mt-1"/>
            <img className="w-30 h-8 mx-2" src={img} alt="youtube logo"/>
        </div>
        <div className="bg-custom flex col-span-10 border border-gray-400 rounded-full">
            <input type="text" placeholder="Search" className="w-1/2 rounded-l-full"/>
            <ImSearch  size={25} className="mt-1"/>
        </div>
        <div className="col-span-1">
            <FaCircleUser  size={25} className="mt-1"/>
        </div>
    </div>
  )
}

export default Header