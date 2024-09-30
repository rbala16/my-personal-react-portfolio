import React from "react";
import navLinksdata from "../../constants";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "../../index.css";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="w-full h-24  sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
        <h1>
          Port<span>Folio</span>
        </h1>

        <div>
          <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>
          {showMenu && (
            <div className="w-[100%] h-screen overflow-scroll fixed top-0 left-0 bg-gray-900 text-center p-4 scrollbar-hide ">
              <div className="flex flex-col gap-8 py-2 relative">
                <h1 className="p-6 text-center text-designColor">
                  Port<span>Folio</span>
                </h1>
                <ul className="flex flex-col gap-6 ">
                  {navLinksdata.map((item) => (
                    <li key={item._id}  onClick={()=>setShowMenu(false)} 
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 ">
                      {item.title}
                      <Link
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      ></Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <h2 className="text-base uppercase text-gray-400  mb-4 py-4">
                  Find me in:
                </h2>
                <div className="flex gap-6">
                <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a
              href="https://x.com/i/flow/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/rajni-bala-4ba53716b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
