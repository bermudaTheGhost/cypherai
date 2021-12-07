import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="border-black-3 border-t text-grey-30 relative">
        <div className="container pt-12 md:pt-20 md:pb-20 px-6 mx-auto">
          <nav>
            <ul className="grid grid-cols-2 gap-2 md:justify-evenly md:flex md:flex-wrap">
              {/* 1 */}
              <li className="md:w-auto mb-8 md:mb-0">
                <h2 className="text-trueGray-400 text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest">
                  Products
                </h2>
                <ul>
                  <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                    <Link
                      className="font-normal text-trueGray-400 hover:text-white"
                      to="/products"
                    >
                      Cypher Audius
                    </Link>
                  </li>
                  <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                    <Link
                      className="font-normal text-trueGray-400 hover:text-white"
                      to="/products"
                    >
                      Cypher Bot
                    </Link>
                  </li>
                  <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                    <Link
                      className="font-normal text-trueGray-400 hover:text-white"
                      to="/products"
                    >
                      Cypher Vision
                    </Link>
                  </li>
                  {/* 2 */}
                </ul>
              </li>
              <li className="md:w-auto mb-8 md:mb-0">
                <h2 className="text-trueGray-400 text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest">
                  Company
                </h2>
                <ul>
                  <li className="flex mb-3 text-xs md:text-sm md:mb-3">
                    <Link
                      className="font-normal text-trueGray-400 hover:text-white"
                      to="/about-us"
                    >
                      About us
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="flex text-xs md:text-sm  justify-between flex-col md:flex-row pt-6 md:mt-12 pb-12 border-black-3 border-t">
            <span className="text-trueGray-400">
              Copyright © 2021 Cypher AI, Inc. All rights reserved.
            </span>
            <span className="mt-4 md:mt-0">
              <p className="text-trueGray-400 font-normal">
                Terms of Use &amp; Privacy Policy
              </p>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
