import React from "react";
import Product from "../images/product.svg";
import Close from "../images/close.svg";
import { Link } from "react-router-dom";

export default function MenuNav({ close }) {
  return (
    <div className="fixed top-3 left-3 right-3 background-black-10 shadow-lg rounded-lg overflow-hidden p-4">
      <button
        className="text-xs text-white float-right opacity-70 hover:opacity-100  pr-3"
        onClick={close}
      >
        <span className="block w-3">
          <svg
            viewBox="0 0 24 24"
            width={20}
            height={20}
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <circle cx={12} cy={12} r={10} />
            <line x1={15} y1={9} x2={9} y2={15} />
            <line x1={9} y1={9} x2={15} y2={15} />
          </svg>
        </span>
      </button>
      <div className="text-gray-400 text-xs">
        {/* 1 */}
        <div className="mb-4 pb-4 border-b border-black-3">
          <div className="text-gray-400 block text-xs tracking-wider">
            <p>PRODUCTS</p>
            <div className="flex flex-wrap gap-x-8">
              <Link
                to="/products"
                className="w-5/12 pt-4 text-white whitespace-nowrap md:text-sm"
                onClick={close}
              >
                <div className="flex px-1">
                  <img className="w-4 h-4" src={Product} alt="icon" />
                  <p className="px-2">Cypher Audius</p>
                </div>
              </Link>
              <Link
                to="products"
                className="w-5/12 pt-4 text-white whitespace-nowrap md:text-sm"
                onClick={close}
              >
                <div className="flex px-1">
                  <img className="w-4 h-4" src={Product} alt="icon" />
                  <p className="px-2">Cypher Bot</p>
                </div>
              </Link>
              <Link
                to="products"
                className="w-5/12 pt-4 text-white whitespace-nowrap md:text-sm"
                onClick={close}
              >
                <div className="flex px-1">
                  <img className="w-4 h-4" src={Product} alt="icon" />
                  <p className="px-2">Cypher Vision</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="mb-4 pb-4 border-b border-black-3">
          <div className="text-gray-400 block text-xs tracking-wider">
            <p>COMPANY</p>
            <div className="pt-4 text-white whitespace-nowrap md:text-sm">
              <Link to="about-us" className="flex px-1" onClick={close}>
                <img className="w-4 h-4" src={Product} alt="icon" />
                <p className="px-2">About us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
