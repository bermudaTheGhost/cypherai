import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";
import logo from "../logo.svg";
import menu from "../images/menu.png";
import product from "../images/product.svg";
import MenuNav from "./MenuNav";
import MenuProducts from "./MenuProducts";

const ScreenLayout = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div className="w-full overflow-x-hidden text-white">
      <div className="relative">
        <header className="relative z-50 w-full text-left text-white bg-transparent">
          {modalVisible && <MenuNav close={closeModal} />}
          <div className="container flex items-center justify-between h-20 pl-1 pr-6 mx-auto">
            <Link to="/" className="nav-link">
              <img src={logo} className="h-20 cursor-pointer logo" alt="logo" />
            </Link>
            <img
              src={menu}
              className="w-6 h-4 lg:hidden"
              alt="menu"
              onClick={openModal}
            />
            <ul className="hidden lg:flex lg:gap-x-6 lg:mr-16">
              <li className="relative pt-4 cursor-pointer group hover:text-gray-300">
                <Link to={"/products"} className="nav-link">
                  Products
                </Link>
                {/* hover */}
                <MenuProducts urlImage={product} />
              </li>
              <li className="relative pt-4 cursor-pointer group hover:text-gray-300">
                <Link to="/about-us" className="nav-link">
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="container mx-auto text-white">{children}</div>
      </div>
    </div>
  );
};

export default ScreenLayout;
