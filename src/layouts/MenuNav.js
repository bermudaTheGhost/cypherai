import React from "react";
import Product from "../images/product.svg";

export default function MenuNav({ close }) {
  return (
    <div className="fixed top-3 left-3 right-3 background-black-10 shadow-lg rounded-lg overflow-hidden p-4">
      <div
        className="rounded-full w-5 h-5 text-xs bg-gray-500 flex justify-center items-center font-thin float-right"
        onClick={close}
      >
        x
      </div>
      <div className="text-gray-400 text-xs">
        {/* 1 */}
        <div className="mb-4 pb-4 border-b border-black-3">
          <div className="text-gray-400 block text-xs tracking-wider">
            <p>PRODUCTS</p>
            <div className="flex flex-wrap gap-x-8">
              <div className="w-5/12 pt-4 text-white whitespace-nowrap md:text-sm">
                <div className="flex px-1">
                  <img className="w-4 h-4" src={Product} alt="icon" />
                  <p className="px-2">Cypher Audius</p>
                </div>
              </div>
              <div className="w-5/12 pt-4 text-white whitespace-nowrap md:text-sm">
                <div className="flex px-1">
                  <img className="w-4 h-4" src={Product} alt="icon" />
                  <p className="px-2">Cypher Bot</p>
                </div>
              </div>
              <div className="w-5/12 pt-4 text-white whitespace-nowrap md:text-sm">
                <div className="flex px-1">
                  <img className="w-4 h-4" src={Product} alt="icon" />
                  <p className="px-2">Cypher Vision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="mb-4 pb-4 border-b border-black-3">
          <div className="text-gray-400 block text-xs tracking-wider">
            <p>COMPANY</p>
            <div className="pt-4 text-white whitespace-nowrap md:text-sm">
              <div className="flex px-1">
                <img className="w-4 h-4" src={Product} alt="icon" />
                <p className="px-2">About us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
