import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";
import logo from "../logo.svg";
import product from "../images/product.svg";
import MenuNav from "./MenuNav";
import MenuProducts from "./MenuProducts";

const ScreenLayout = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div className="w-full text-white overflow-x-hidden">
      <div className="relative">
        <header className="bg-transparent text-white w-full text-left relative z-50">
          {modalVisible && <MenuNav close={closeModal} />}
          <div className="container mx-auto flex items-center justify-between h-20 pr-6 pl-1">
            <Link to="/" className="nav-link">
              <img src={logo} className="logo h-20 cursor-pointer" alt="logo" />
            </Link>
            {/* <img
              src={menu}
              className="w-6 h-4 lg:hidden"
              alt="menu"
              onClick={openModal}
            /> */}
            <ul className="hidden lg:flex lg:gap-x-6 lg:mr-16">
              <li className="group relative cursor-pointer pt-4 hover:text-gray-300">
                {/* <Link to={"/products"} className="nav-link">
                  Products
                </Link> */}
                {/* hover */}
                <MenuProducts urlImage={product} />
              </li>
              <li className="group relative cursor-pointer pt-4 hover:text-gray-300">
                {/* <Link to="/about-us" className="nav-link">
                  About us
                </Link> */}
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
