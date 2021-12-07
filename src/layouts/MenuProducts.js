import React from "react";
import { Link } from "react-router-dom";

export default function MenuProducts({ urlImage }) {
  return (
    <div className="pt-4 cursor-default">
      <div className="hidden group-hover:block absolute background-black-10 left-1/2 transform -translate-x-1/2 shadow-md rounded-2xl border-t-2 border-black-3">
        <div className="-m-2 transform rotate-45 border-t-2 border-l-2 background-black-10 border-black-3 w-4 h-4 mx-auto rounded-sm"></div>
        <div className="gap-20 pt-10 pb-12 px-10">
          <h4 className="inline-block mb-8 text-gradient font-h4 text-overtitle">
            ANNOTATE
          </h4>
          <ul className="grid grid-cols-none gap-y-9">
            <li className="hover-scale">
              <Link
                to="/products"
                className="m-0 p-0 select-none lg:whitespace-nowrap flex cursor-pointer"
              >
                <img
                  src={urlImage}
                  alt="icon-product"
                  className="w-12 h-12 mr-4 ease-in-out duration-100"
                />
                <div className="mr-11">
                  <p className="text-sm text-white">Cypher Audius</p>
                  <p className="text-sm text-grey-30">
                    The fastest way to production-quality labels.
                  </p>
                </div>
              </Link>
            </li>
            {/* 2 */}
            <li className="hover-scale">
              <Link
                to="/products"
                className="m-0 p-0 select-none lg:whitespace-nowrap flex cursor-pointer"
              >
                <img
                  src={urlImage}
                  alt="icon-product"
                  className="w-12 h-12 mr-4 ease-in-out duration-200"
                />
                <div className="pr-4">
                  <p className="text-sm text-white">Cypher Bot</p>
                  <p className="text-sm text-grey-30">
                    The fastest way to production-quality labels.
                  </p>
                </div>
              </Link>
            </li>
            {/* 3 */}
            <li className="hover-scale">
              <Link
                to="/products"
                className="m-0 p-0 select-none lg:whitespace-nowrap flex cursor-pointer"
              >
                <img
                  src={urlImage}
                  alt="icon-product"
                  className="w-12 h-12 mr-4 ease-in-out duration-100"
                />
                <div className="pr-4">
                  <p className="text-sm text-white">Cypher Vision</p>
                  <p className="text-sm text-grey-30">
                    The fastest way to production-quality labels.
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
