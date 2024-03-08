import React, { useState } from "react";
import { Link } from "react-router-dom";
import buffer from '../images/buffer.svg';
import search from '../images/search.svg';
import dropdown from '../images/dropdown.svg';

function NavBar() {
    const [toolsOpen, setToolsOpen] = useState(false);
    const [channelsOpen, setChannelsOpen] = useState(false);

    return (
        <nav className="flex flex-col md:flex-row justify-between items-center p-5">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Link to="/">
                    <img src={buffer} alt="logo" className="w-8 h-8" />
                </Link>
                <h1 className="font-bold text-xl md:text-2xl">Buffer</h1>
            </div>
            {/* Buffer Links */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 relative">
                <div className="relative">
                    <button onClick={() => setToolsOpen(!toolsOpen)} className="flex items-center focus:outline-none">
                        Tools <img src={dropdown} alt="dropdown" className="ml-1 h-4" />
                    </button>
                    {toolsOpen && (
                        <div className="absolute md:left-0 md:top-full md:mt-1 bg-white border border-gray-300 rounded-md shadow-lg py-1">
                            <Link to="/">Dropdown </Link>
                            <Link to="/"></Link>
                            <Link to="/"></Link>
                        </div>
                    )}
                </div>
                <div className=" relative">
                    <Link to="/Channels" className="flex items-center" onClick={() => setChannelsOpen(!channelsOpen)}>
                        Channels <img src={dropdown} alt="dropdown" className="ml-1 h-4" />
                    </Link>
                    {channelsOpen && (
                        <div className="flex flex-wrap absolute md:left-0 md:top-full md:mt-1 bg-white border border-gray-300 rounded-md shadow-lg py-1 mx-5">
                            <Link to="/"></Link>
                            <Link to="/">Hello</Link>
                        </div>
                    )}
                </div>
                <Link to="/Pricing">Pricing</Link>
                <Link to="/Blog">Blog</Link>
            </div>
            <div className="flex items-center space-x-4">
                <img src={search} alt="search" className="w-6 h-6" />
                <button className="text-[#2C73FF]">Log in</button>
                <button className="bg-[#2C4BFF] text-white px-4 py-2 rounded-sm">Get started now</button>
            </div>
        </nav>
    );
}

export default NavBar;
