import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "@/assets/images/logo.svg";
import { TransactionContext } from "../context/TransactionContext";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { currentAccount } = useContext(TransactionContext);

  const handleButtonClick = (route) => {
    if (!currentAccount) {
      alert("Please connect your wallet first!");
      return;
    }
    window.location.href = route; // Redirect to the specified route (external link)
  };

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.8] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-40 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li className="mr-5">
          <button
            type="button"
            onClick={() => handleButtonClick("https://portfolio.metamask.io/buy/build-quote")}
            className="flex flex-row justify-center bg-transparent border-2 rounded-xl items-center my-6 p-3 cursor-pointer hover:bg-[#ffffff0b]"
          >
            <p className="text-white mx-4 text-base font-semibold">
              Add Money
            </p>
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleButtonClick("https://portfolio.metamask.io/sell/build-quote")}
            className="flex flex-row justify-center bg-transparent border-2 rounded-xl items-center my-6 p-3 cursor-pointer hover:bg-[#ffffff0b]"
          >
            <p className="text-white mx-4 text-base font-semibold">
              Withdraw
            </p>
          </button>
        </li>
        <li className="bg-[#ffa869] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <li className="mr-4">
              <button
                type="button"
                onClick={() => handleButtonClick("https://portfolio.metamask.io/buy/build-quote")}
                className="flex flex-row justify-center bg-transparent items-center my-1 mr-2 cursor-pointer hover:bg-[#ffffff0b]"
              >
                <p className="text-white mx-4 text-lg font-normal">
                  Add Money
                </p>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleButtonClick("https://portfolio.metamask.io/sell/build-quote")}
                className="flex flex-row justify-center bg-transparent items-center mr-3 p-3 cursor-pointer hover:bg-[#ffffff0b]"
              >
                <p className="text-white mx-4 text-lg font-normal">
                  Withdraw
                </p>
              </button>
            </li>
            <li className="bg-[#ffa869] py-1 px-5 mx-9 my-1 rounded-xl cursor-pointer hover:bg-[#ffb784] font-bold text-gray-800">
              Login 
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;