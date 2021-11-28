import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import logo from "../logo.svg";
import menu from "../images/menu.png";

const ScreenLayout = ({ children }) => {
  return (
    <div className="w-full bg-black h-screen text-white">
      <header className="bg-transparent text-white w-full">
        <div className="flex items-center justify-between  h-20 p-6">
          <img src={logo} className="h-16" alt="logo" />
          <img src={menu} className="w-6 h-4 lg:hidden" alt="logo" />

          <ul className="hidden lg:flex lg:gap-x-6">
            <li>
              <Link to={"/products"} className="nav-link">
                Products
              </Link>
            </li>
            <li>
              <Link to={"/company"} className="nav-link">
                Company
              </Link>
            </li>
            <li>
              <Link to={"/about-us"} className="nav-link">
                About us
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default ScreenLayout;
