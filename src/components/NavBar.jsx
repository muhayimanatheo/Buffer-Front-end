import { Link } from "react-router-dom";
import buffer from '../images/buffer.svg';
import search from '../images/search.svg';
import dropdown from '../images/dropdown.svg';
function NavBar() {
    return <>
    <nav className="flex justify-around p-5">
        {/* Buffer Logo */}
        <div className="flex gap-5" id="logo">
            <Link to="/">
                { <img src={buffer} alt="logo"/> }
            </Link>
            <h1 className="font-bold text-2xl">Buffer</h1>
        </div>
        {/* buffer Links */}
        <div className=" " id="Links">
            <ul className="flex flex-cols-3 gap-5 space-x-3">
                <li className="flex">
                    <Link to="/">Tools</Link>{<img src={dropdown} alt="dropdown" className="pt-1"/>}
                </li>
                <li className="flex">
                    <Link to="/Channels">Channels </Link>
                    <img src={dropdown} alt="dropdown" className="pt-1"/>
                </li>
                <li>
                    <Link to="/Pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/Blog">Blog</Link>
                </li>
            </ul>
        </div>
        <div className="flex gap-5 w-1/5">
            {<img src={search}alt="search" />}
            <button className="text-[#2C73FF]">Log in</button>
            <button className="bg-[#2C4BFF] text-white p-3 rounded-sm">Get started now</button>
        </div>
    </nav>
    </>
}

export default NavBar;