import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from "react-icons/im";
import { FaCircleUser } from "react-icons/fa6";
import img from "../assets/you-tube-logo-without-background-c21e.png"

const Header = () => {
  return (
    <div className="grid grid-cols-12 items-center p-2 shadow-lg gap-x-6">
        <div className="flex items-center col-span-3  justify-start">
            <GiHamburgerMenu size={25} className="mr-2" />
            <img className="h-8" src={img} alt="youtube logo" />
        </div>
        <div className="flex items-center col-span-6 border border-gray-400 rounded-full overflow-hidden bg-custom">
            <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-1 outline-none"
            />
            <button className="px-4">
            <ImSearch size={20} />
            </button>
        </div>
        <div className="flex justify-end col-span-3">
            <FaCircleUser size={25} />
        </div>
    </div>

  )
}

export default Header