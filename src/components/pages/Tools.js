import img1 from "../../images/img1.png";
import img2 from "../../images/img2.jpg";
import lukas from "../../images/lukas.jpg";
import joshua from "../../images/joshua.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

function ToolsFunc() {
  const Welcome = [
    {
      photo: img1,
      title:
        "Trust, Transparency, and Curiosity: Batsirai Chada on Buffer's Unique Culture",
      description:
        "Batsirai Chada is a Growth Product Manager at Buffer, where he’s worked for about nine months.",
    },
  ];
  const Welcome1 = [
    {
      photo: lukas,
      title:
        "Trust, Transparency, and Curiosity: Batsirai Chada on Buffer's Unique Culture",
      description:
        "Batsirai Chada is a Growth Product Manager at Buffer, where he’s worked for about nine months.",
    },
  ];
  const Welcome2 = [
    {
      photo: joshua,
      title:
        "Trust, Transparency, and Curiosity: Batsirai Chada on Buffer's Unique Culture",
      description:
        "Batsirai Chada is a Growth Product Manager at Buffer, where he’s worked for about nine months.",
    },
  ];

  const links = [
    {
      name: "Latest Updates",
    },
    {
      name: "Small Business",
    },
    {
      name: "Social Media Marketing",
    },
    {
      name: "News",
    },
    {
      name: "Podcast",
    },
    {
      name: "Open Blog",
    },
    {
      name: "Case Studies",
    },
  ];
  const [activeLink, setActiveLink] = useState("Latest Updates");

  const handleClick = (tab) => {
    setActiveLink(tab);
  };

  return (
    <>
      <main className="flex flex-col md:flex-row mx-5">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={img1} alt="img1" className="max-w-full" />
        </div>
        <div className="mx-4 md:mx-7 my-4 md:my-0">
          <p className="text-center md:text-left">publication open</p>
          <h1 className="font-bold text-2xl md:text-4xl p-3 text-center md:text-left">
            Trust, Transparency, and <br /> Curiosity: Batsirai Chada on
            <br /> Buffer's Unique Culture
          </h1>
          <p className="p-3 text-center md:text-left">
            Batsirai Chada is a Growth Product Manager at Buffer, where he’s
            worked
            <br /> for about nine months. We spoke to him when he first joined
            to find out <br />
            about his journey to Buffer, how he works, and what he does outside
            of
            <br /> work.
          </p>
          <div className="flex space-x-5 ">
            <span>
              <p>Apr27,2023</p>
            </span>
            <span>
              <p>5 min read</p>
            </span>
            <span>
              <p>Apr27,2023</p>
            </span>
          </div>
          <div className="flex justify-center md:justify-start">
            <span className="">
              <img
                src={img2}
                alt="img2"
                className="w-20 h-20 rounded-full border-indigo-600 border-4"
              />
            </span>
            <span className="mx-6 py-2">
              <ul>
                <li className="font-bold text-xl md:text-2xl">
                  <a href="#/"> Tamilore Oladipo</a>
                </li>
              </ul>
              <p> Content Writer @ Buffer</p>
            </span>
          </div>
        </div>
      </main>
      <div className="py-6 px-2 sm:py-8 sm:px-4 md:py-10 md:px-6 lg:py-12 lg:px-8 xl:py-14 xl:px-10">
        <ul className="flex flex-wrap gap-4 justify-start sm:justify-center md:justify-start border-b-[2px] ">
          {links.map((link) => (
            <Link
              onClick={() => handleClick(link.name)}
              className={`text-gray-500 hover:text-blue-700 pb-2 ${
                activeLink === link.name
                  ? "border-b-2 border-blue-700 -mb-[2px] text-blue-700"
                  : ""
              }`}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex flex-cols-3 w-full mx-3">
        <div className="border-2 space-x-2">
          {Welcome.map((data, index) => (
            <div key={index} className="w-full">
              <img src={data.photo} alt="img1" className="p-3" />
              <h2 className="font-medium text-xl md:text-2xl p-3">
                {data.title}
              </h2>
              <p className="p-3 text-center md:text-left">{data.description}</p>
            </div>
          ))}
        </div>
        <div className="border-2 space-x-2 mx-2">
          {Welcome1.map((data, index) => (
            <div key={index} className="w-full">
              <img src={data.photo} alt="img1" className="p-3" />
              <h1 className="font-medium text-xl md:text-2xl p-3">
                {data.title}
              </h1>
              <p className="p-3 text-center md:text-left">{data.description}</p>
            </div>
          ))}
        </div>
        <div className="border-2 space-x-2 mx-2">
          {Welcome2.map((data, index) => (
            <div key={index} className="w-full">
              <img src={data.photo} alt="img1" className="p-3" />
              <h1 className="font-medium text-xl md:text-2xl p-3">
                {data.title}
              </h1>
              <p className="p-3 text-center md:text-left">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ToolsFunc;
