import React from "react";
import image1 from "images/cypherbot1.svg";
import image2 from "images/cypherbot2.jpg";
import image3 from "images/cypherbot3.svg";

export default function CypherBot() {
  return (
    <div className="py-20 lg:py-36 bg-transparent px-6">
      <div className="container">
        <div className="section-natural md:max-w-4xl mb-24">
          <h2 className="inline-block text-overtitle text-gradient">
            Use case
          </h2>
          <h1 className="text-white font-aeonik my-6 w-full text-4xl lg:text-5xl">
            Cypher Bot - Natural Language Processing
          </h1>
          <p className="text-grey-20 text-base lg:text-xl">
            Extract information and gain valuable insights form a vast corpus of
            text-based data. Understand and interact with text to improve search
            relevance, automate customer support and more.
          </p>
        </div>
        <ul className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          <li className="text-grey-20">
            <div className="h-72">
              <img src={image1} alt="" className="w-auto h-72" />
            </div>
            <h2 className="mt-6 mb-2 text-2xl font-aeonik text-trueGray-50 text-white">
              Information Extraction
            </h2>
            <p className="text-base leading-relaxed text-gray-400">
              Extract structured text information from unstructured or
              semi-structured content.
            </p>
            <ul className="mt-6">
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Document Processing
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Topic Modeling
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Product Cataloguing
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Policy Enforcement
                </p>
              </li>
            </ul>
          </li>
          {/* 2 */}
          <li className="text-grey-20">
            <div className="h-72">
              <img src={image2} alt="" className="w-auto h-72" />
            </div>
            <h2 className="mt-6 mb-2 text-2xl font-aeonik text-trueGray-50 text-white">
              Natural Language Generation
            </h2>
            <p className="text-base leading-relaxed text-gray-400">
              Understand text inputs, then generate appropriate responses.
            </p>
            <ul className="mt-6">
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Search and Ad Relevance
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Question Answering (Virtual Assistants)
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Sentiment & Intent Analysis
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Content Summarization & Moderation
                </p>
              </li>
            </ul>
          </li>
          {/* 3 */}
          <li className="text-grey-20">
            <div className="h-72">
              <img src={image3} alt="" className="w-auto h-72" />
            </div>
            <h2 className="mt-6 mb-2 text-2xl font-aeonik text-trueGray-50 text-white">
              Machine Translation
            </h2>
            <p className="text-base leading-relaxed text-gray-400">
              Automatically translate text inputs into different languages.
            </p>
            <ul className="mt-6">
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Automated Translation
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Automated Transcription
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Dialogue Generation
                </p>
              </li>
              <li className="mb-2">
                <p className="text-base leading-relaxed text-gray-400">
                  • Speech to Text, Text to Speech
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
