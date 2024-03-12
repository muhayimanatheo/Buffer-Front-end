import React, { useState } from "react";
import { Link } from "react-router-dom";
import buffer from '../images/buffer.svg';
import search from '../images/search.svg';
import dropdown from '../images/dropdown.svg';

function NavBar() {
    const [toolsOpen, setToolsOpen] = useState(false);
    const [channelsOpen, setChannelsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white flex flex-col md:flex-row justify-between items-center p-5 shadow-md">
    <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <Link to="/">
            <img src={buffer} alt="logo" className="w-8 h-8" />
        </Link>
        <h1 className="font-bold text-xl md:text-2xl">Buffer</h1>
    </div>
    {/* Buffer Links */}
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 relative">
        <div className="relative">
            <button onClick={() => setToolsOpen(!toolsOpen)} className="flex items-center focus:outline-none hover:text-[#1F35B3] font-semibold ">
                Tools <img src={dropdown} alt="dropdown" className="ml-1 h-4" />
            </button>
            {toolsOpen && (
                <div className="absolute flex flex-col md:left-0 md:top-full md:mt-1 bg-white border border-gray-300 rounded-md shadow-lg py-1 w-[9rem] p-2 hover:text-[#1F35B3] font-semibold ">
                    <Link to="/">Publishing </Link>
                    <Link to="/">Analytics</Link>
                    <Link to="/">Engagement</Link>
                </div>
            )}
        </div>
        <div className=" relative">
            <Link to="/Channels" className="flex items-center hover:text-[#1F35B3] font-semibold " onClick={() => setChannelsOpen(!channelsOpen)}>
                Channels <img src={dropdown} alt="dropdown" className="ml-1 h-4" />
            </Link>
            {channelsOpen && (
                <div className="flex flex-wrap absolute md:left-0 md:top-full md:mt-1 bg-white border border-gray-300 rounded-md shadow-lg py-1 mx-5">
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                </div>
            )}
        </div>
        <Link to="/Pricing" className="hover:text-[#1F35B3] font-semibold ">Pricing</Link>
        <Link to="/Blog" className="hover:text-[#1F35B3] font-semibold ">Blog</Link>
    </div>
    <div className="flex items-center space-x-4">
        <img src={search} alt="search" className="w-6 h-6" />
        <Link className="text-[#2C73FF] " to="/login">Log in</Link>
        <Link className="bg-[#2C4BFF] text-white px-4 py-2 rounded-sm" to ="/signup">Get started now</Link>
    </div>
</nav>

    );
}

export default NavBar;
