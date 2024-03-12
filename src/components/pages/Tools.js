import img1 from "../../images/img1.png";
import lukas from "../../images/lukas.jpg";
// import joshua from "../../images/joshua.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import eyeglasses from "../../images/eyeglasses.svg";
import axios from "axios";

function ToolsFunc() {
  // const Welcome = [
  //   {
  //     image: img1,
  //     title:
  //       "Trust, Transparency, and Curiosity: Batsirai Chada on Buffer's Unique Culture",
  //     description:
  //       "Batsirai Chada is a Growth Product Manager at Buffer, where he’s worked for about nine months.",
  //     name: "Latest Updates",
  //   },
  //   {
  //     image: lukas,
  //     title:
  //       "Trust, Transparency, and Curiosity: Batsirai Chada on Buffer's Unique Culture",
  //     description:
  //       "Batsirai Chada is a Growth Product Manager at Buffer, where he’s worked for about nine months.",
  //     name: "Latest Updates",
  //   },
  //   {
  //     image: joshua,
  //     title:
  //       "Trust, Transparency, and Curiosity: Batsirai Chada on Buffer's Unique Culture",
  //     description:
  //       "Batsirai Chada is a Growth Product Manager at Buffer, where he’s worked for about nine months.",
  //     name: "News",
  //   },
  //   {
  //     image: joshua,
  //     title:
  //       "Trust, Transparency, and Curiosity: Batsirai Chada on Buffer's Unique Culture",
  //     description:
  //       "Batsirai Chada is a Growth Product Manager at Buffer, where he’s worked for about nine months.",
  //     name: "Latest Updates",
  //   },
  // ];

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

  // const filterNew = Welcome.filter((item) => item.name === activeLink);

  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/PublicationBuffer/"
        );
        setUserdata(response.data);
        console.log(response.data);
        // console.log("Data received:");
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    const deletePath = `http://127.0.0.1:8000/PublicationBuffer/${userId}`;
    try {
      const response = await axios.delete(deletePath);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="flex flex-col md:flex-row mx-5 mt-20 my-5">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={img1} alt="img1" className=" w-full h-80 mt-2" />
        </div>
        <div className="mx-4 md:mx-7 my-4 md:my-0">
          <span className=" flex items-center">
            <p className="text-center md:text-left">Publication </p>
            <svg
              className="w-4 h-4 text-gray-800 dark:text-white items-center pt-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
            <p className="font-semibold">Open</p>
          </span>

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
          <div className="flex items-center space-x-5 ">
            <span>
              <p>Apr27,2023</p>
            </span>
            <span className="flex items-center">
              <img src={eyeglasses} alt="" className="w-10 h-10 " />
              <p className="">5 min read</p>
            </span>
            <span className="bg-[#e1e0e0] p-2">
              <p className="">Open</p>
            </span>
          </div>
          <div className="flex justify-center md:justify-start">
            <span className="">
              <img
                src={lukas}
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
      <div className="py-6 px-2 sm:py-8 sm:px-4 md:py-10 md:px-6 lg:py-12 lg:px-8 xl:py-14 xl:px-10 sticky top-0">
        <ul className="flex flex-wrap gap-4 justify-start sm:justify-center md:justify-start border-b-[2px] sticky top-0">
          {links.map((link) => (
            <Link
              onClick={() => handleClick(link.name)}
              className={` text-gray-500 hover:text-blue-700 pb-2 ${
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
      <div className="">
        <div className="space-x-2 grid grid-cols-3">
          {userdata.map((data, index) => (
            <div
              key={index}
              className="border-2 items-center justify-items-center"
            >
              <img
                src={`http://127.0.0.1:8000/${data.image}`}
                alt="Publication images"
                className="p-3 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-500"
              />
              <h2 className="font-medium text-xl md:text-2xl p-3">
                {data.header}
              </h2>
              <p className="p-3 text-center md:text-left">{data.description}</p>

              {/* profile */}
              <div className="flex justify-center md:justify-start">
                <span className="">
                  <img
                    src={lukas}
                    alt="img2"
                    className="w-[3rem] h-[3rem] rounded-full border-indigo-600 border-4"
                  />
                </span>
                <span className="mx-10 py-2">
                  <ul>
                    <li className="text-xl md:text-2xl font-normal">
                      <a href="#/"> Tamilore Oladipo</a>
                    </li>
                  </ul>
                </span>
              </div>

              <button
                onClick={() => handleDelete(data.id)}
                className="bg-[#F4A5C5] text-white font-serif font-bold px-4 py-2 rounded-lg mt-2 max-auto block place-content-center mx-16"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ToolsFunc;
