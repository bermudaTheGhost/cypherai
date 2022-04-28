import React from "react";
import image1 from "images/image1.jpeg";
import image2 from "images/image2.gif";
import image3 from "images/image3.jpeg";

export default function CypherAudius() {
  return (
    <div className="py-20 lg:py-36 bg-transparent px-6">
      <div className="container">
        <div className="section-natural md:max-w-4xl mb-24">
          <h1 className="text-white font-aeonik my-6 w-full text-4xl lg:text-5xl">
            Cypher Audius - Audio and Speech
          </h1>
          <p className="text-grey-20 text-base lg:text-xl">
            Collect a wide variety of text data to train your chatbots or
            conversational agents.
          </p>
        </div>
        <ul className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {/* 1 */}
          <li className="text-grey-20">
            <div className="h-72">
              <img src={image1} alt="" className="w-auto h-72" />
            </div>
            <h2 className="mt-6 mb-2 text-2xl font-aeonik text-trueGray-50 text-white">
              Multi-lingual Data collection
            </h2>
            <p className="text-base leading-relaxed text-gray-400">
              Power your audio interfaces by collecting audio snippets.
            </p>
          </li>
          {/* 2 */}
          <li className="text-grey-20">
            <div className="h-72">
              <img src={image2} alt="" className="h-72 w-auto" />
            </div>
            <h2 className="mt-6 mb-2 text-2xl text-trueGray-50 text-white">
              Lexicon Development
            </h2>
            <p className="text-base leading-relaxed text-gray-400">
              Leverage our globally trained workforce to transcribe audio
              snippets to text help your models understand the nuances of
              speech.
            </p>
          </li>
          {/* 3 */}
          <li className="text-grey-20">
            <div className="h-72">
              <img src={image3} alt="" className="w-auto h-72" />
            </div>
            <h2 className="mt-6 mb-2 text-2xl font-aeonik text-trueGray-50 text-white">
              Multi-lingual Transcription
            </h2>
            <p className="text-base leading-relaxed text-gray-400">
              Use our highly trained, multi-lingual, workforce to determine
              emotion, categorize the topic, or identify an important event in a
              snippet of audio.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
