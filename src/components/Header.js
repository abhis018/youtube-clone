import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from "react-icons/im";
import { FaCircleUser } from "react-icons/fa6";
import img from "../assets/you-tube-logo-without-background-c21e.png"
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {

    // make an api call after every key press
    // but if th edifference between 2 api calls is <200ms
    // decline the API call
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  },[searchQuery]);


  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1])
  }


  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-cols-12 items-center p-2 shadow-lg gap-x-6">
        <div className="flex items-center col-span-3  justify-start">
            <GiHamburgerMenu size={25} className="mr-2 cursor-pointer" onClick={() => toggleMenuHandler()} />
            <img className="h-6" src={img} alt="youtube logo" />
        </div>
        <div className="relative col-span-6">
          <div className="flex items-center border border-gray-400 rounded-full overflow-hidden bg-custom">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-1 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="px-4">
              <ImSearch size={20} />
            </button>
          </div>
          {showSuggestions && <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded shadow-lg z-10">
            {suggestions.map(s => <li key={s} className="px-4 py-2 hover:bg-gray-100">{s}</li>)}
          </ul>}
        </div>
        <div className="flex justify-end col-span-3">
            <FaCircleUser size={25} />
        </div>
    </div>

  )
}

export default Header