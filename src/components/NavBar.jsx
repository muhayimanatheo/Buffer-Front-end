import { Link } from "react-router-dom";
import buffer from '../images/buffer.svg';
import search from '../images/search.svg';
import dropdown from '../images/dropdown.svg';

function NavBar() {
    return (
        <nav className="flex flex-col md:flex-row justify-between items-center p-5">
            {/* Buffer Logo */}
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Link to="/">
                    <img src={buffer} alt="logo" className="w-8 h-8" />
                </Link>
                <h1 className="font-bold text-xl md:text-2xl">Buffer</h1>
            </div>
            {/* Buffer Links */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <Link to="/" className="flex items-center">
                    Tools <img src={dropdown} alt="dropdown" className="ml-1 h-4" />
                </Link>
                <Link to="/Channels" className="flex items-center">
                    Channels <img src={dropdown} alt="dropdown" className="ml-1 h-4" />
                </Link>
                <Link to="/Pricing">Pricing</Link>
                <Link to="/Blog">Blog</Link>
            </div>
            {/* Search and Action Buttons */}
            <div className="flex items-center space-x-4">
                <img src={search} alt="search" className="w-6 h-6" />
                <button className="text-[#2C73FF]">Log in</button>
                <button className="bg-[#2C4BFF] text-white px-4 py-2 rounded-sm">Get started now</button>
            </div>
        </nav>
    );
}

export default NavBar;
