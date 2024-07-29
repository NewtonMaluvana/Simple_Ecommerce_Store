import { FaBars, FaCross, FaSearch, FaShoppingBag } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import icon from "/images/logo.png";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]");
  }
  const NavItems = [
    { title: "Shorts", path: "/" },
    { title: " Hoodies ", path: "/" },
    { title: "Phones", path: "/" },
    { title: "Accessories", path: "/" },
    { title: "Shoes ", path: "/" },
  ];
  return (
    <header className="w-auto">
      <nav className="max-w-screen-2xl  py-4 flex justify-between items-center container  px-4 bg-slate-800">
        <a href="/">
          <img
            src={icon}
            alt=""
            width={50}
            className="hover:scale-125 duration-1000 ease-in-out"
          />
        </a>
        {/* <FaSearch className="text-black cursor-pointer hidden md:block" /> */}

        <div className=" text-lg text-white gap-5 sm:flex items-center hidden ">
          <Link
            to="/cart/"
            className="flex items-center me-6 hover:text-orange-400 "
          >
            <FaShoppingBag />
          </Link>
        </div>

        {/* nav button for smaller(sm) devices */}
        <div className="sm:hidden flex">
          <div className=" sm:hidden pe-1  flex justify-between">
            <Link
              to="/cart/"
              className="flex text-white items-center me-6 hover:text-orange-400 "
            >
              <FaShoppingBag />
            </Link>
          </div>
          <div
            className=" sm:hidden pe-1  flex justify-between"
            onClick={toggleMenu}
          >
            {isOpen ? <FaX /> : <FaBars />}
          </div>
        </div>

        {/* menu items for mobile devices */}
      </nav>
      <hr />

      {/* na for catergories */}
      {/* <div className=" px-4 py-4 bg-slate-800 w-full ">
        <ul className="lg:flex items-center justify-between text-lg font-semibold text-white hidden">
          {NavItems.map(({ title, path }) => (
            <li key={title} className="hover:text-orange-400">
              <a href={path}>{title}</a>
            </li>
          ))}
        </ul>
      </div> */}

      <div
        className={`bg-slate-900 w-full flex z-10 flex-col justify-around  absolute text-white rounded p-8 text-xl font-medium ${
          isOpen ? "" : "hidden"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="hover:text-orange-500 p-2"
        >
          <a href="/">Home</a>
        </button>
        <button
          onClick={() => setOpen(false)}
          className="hover:text-orange-500 p-2"
        >
          <a href="#bottom">More info</a>
        </button>
        <button
          onClick={() => setOpen(false)}
          className="hover:text-orange-500 p-2"
        >
          <a href="#bottom"> Our Socials </a>
        </button>
      </div>
    </header>
  );
}
export default Navbar;
