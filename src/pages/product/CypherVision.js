import React from "react";
import image1 from "images/image6.jpeg";
import image2 from "images/image7.png";
import image3 from "images/image8.png";

export default function CypherVision() {
  return (
    <div className="py-20 lg:py-36 bg-transparent px-6">
      <div className="container">
        <div className="section-natural md:max-w-4xl mb-24">
          <h2 className="inline-block text-overtitle text-gradient">
            Use case
          </h2>
          <h1 className="text-white font-aeonik my-6 w-full text-4xl lg:text-5xl">
            Cypher Vision - 2D and 3D images
          </h1>
          <p className="text-grey-20 text-base lg:text-xl">
            Develop highly accurate perception models to locate and identify
            various objects of various classes, classify entire images, extract
            structured text from images, predict behavior and more. Cypher
            Vision supports a range of use cases from autonomous vehicles to
            robotics to AR/VR and retail.
          </p>
        </div>
        <ul className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          <li className="text-grey-20">
            <div className="h-72">
              <img src={image1} alt="" className="h-72 w-auto" />
            </div>
            <h2 className="mt-6 mb-2 text-2xl font-aeonik text-trueGray-50 text-white">
              Detection & Tracking
            </h2>
            <p className="text-base leading-relaxed text-gray-400">
              Developing object detection and tracking models with cuboid or
              segmentation annotation for Autonomous Vehicles and ADAS. Locate
              and precisely identify objects of various classes
            </p>
            <ul className="mt-6">
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Bounding box, polygon & semantic segmentation
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • 2D and Lidar 3D Point Cloud Annotations
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Face detection and emotional analysis
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Damage and Defect Detection
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • In-vehicle videos
                </p>
              </li>
            </ul>
          </li>
          {/* 2 */}
          <li className="text-grey-20">
            <div className="h-72">
              <img src={image2} alt="" className="h-72 w-auto" />
            </div>
            <h2 className="mt-6 mb-2 text-2xl font-aeonik text-trueGray-50 text-white">
              Text Recognition
            </h2>
            <p className="text-base leading-relaxed text-gray-400">
              Identify and extract structured text from images.
            </p>
            <ul className="mt-6">
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • License Plate Identification
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • ID Verification
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Product Cataloging
                </p>
              </li>
            </ul>
          </li>
          {/* 3 */}
          <li className="text-grey-20">
            <div className="h-72">
              <img src={image3} alt="" className="h-72 w-auto" />
            </div>
            <h2 className="mt-6 mb-2 text-2xl font-aeonik text-trueGray-50 text-white">
              Lane & Boundary Detection
            </h2>
            <p className="text-base leading-relaxed text-gray-400">
              Estimate the geometric structure of lanes and boundaries with
              intensity as an optional input parameter for greater accuracy.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
