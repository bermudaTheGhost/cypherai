import React, { useState } from "react";
import FlagIcon from "../../images/flag.svg";
import BackGroundMember from "../../images/member_background.svg";
import "../../styles/about-us.css";
import MemberModal from "./member-modal";
import img9 from "images/image9.jpg";
import img10 from "images/image10.jpg";
import img11 from "images/image11.jpg";
import img12 from "images/image12.jpg";
import img13 from "images/image13.png";
import img14 from "images/image14.png";
import img15 from "images/image15.png";
import img16 from "images/image16.png";
import Footer from "layouts/Footer";

const AboutUs = () => {
  const [modalIsVisible, setModalIsVisible] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const openMemberModal = (id) => {
    switch (id) {
      case 0: {
        setModalIsVisible([true, false, false, false, false]);
        break;
      }
      case 1: {
        setModalIsVisible([false, true, false, false, false]);
        break;
      }
      case 2: {
        setModalIsVisible([false, false, true, false, false]);
        break;
      }
      case 3: {
        setModalIsVisible([false, false, false, true, false]);
        break;
      }
      case 4: {
        setModalIsVisible([false, false, false, false, true]);
        break;
      }
      default:
        break;
    }
  };
  const closeMemberModal = () => setModalIsVisible(false);

  const teamMembers = [
    {
      id: 1,
      name: "Steve Hoang",
      position: "CEO",
      image: img9,
      description:
        "Serial entrepreneur 9 years working experience in Technology industry. Co-founder, former CEO at Vietnam AI Solutions JSC. Thanh and his peers had built VAIS to become top AI companies in Vietnam specializing in Speech recognition.",
    },
    {
      id: 2,
      name: "Anh Tran",
      position: "Head of Engineering",
      image: img10,
      description:
        "8 years experience in software development and leading 30 outsourcing engineers. Besides, he successfully managed a $40M IT project. ",
    },
    {
      id: 3,
      name: "Anh Pham",
      position: "Head of AI",
      image: img11,
      description:
        "Ph.D. Student in Computer Vision at A2I2, Deakin University. Former-AI engineer at VinAI Research with main duties of Auto Pilot Perception features such as Parking Line, 360 View reconstruction, Free Space and Object Detection.",
    },
    {
      id: 4,
      name: "Linh Duong",
      position: "Operation Director | Speech and NLP",
      image: img12,
      description:
        "Graduating from the Japanese Department at Hanoi University, she was Operation Manager of VAIS’s labeling project. She managed up to 500 annotator and built the pools of 2800 crowdsourcing members.",
    },
    {
      id: 5,
      name: "Tuan Nguyen",
      position: "Operation Director | Vision",
      image: img13,
      description:
        "8 years experience in the Business Process Outsourcing field at FPT DPS - FPT Digital Processing Service as Project Director position, leading ~100 Project Managers and multi-million USD projects.",
    },
  ];

  return (
    <div className="about-us-section">
      <div className="mb-20">
        <div className="absolute inset-0 z-0 pointer-events-none isLoaded">
          <div className="gradient-background" />
          <div className="absolute inset-0 w-full bg-gradient-to-b from-black h-screen" />
        </div>

        <div className="px-4 lg:px-0 py-16 lg:py-32 xl:py-56 xl:pt-40">
          <div className="container relative lg:px-8">
            <img
              className="mt-0  mb-8 h-16 md:h-18"
              src={FlagIcon}
              alt="About Page Icon"
            />

            <h1 className="text-white font-aeonik font-light text-4xl md:text-7xl mb-8">
              <div className="lg:max-w-6xl">
                Our mission is to accelerate the development of
                AI&nbsp;applications
              </div>
            </h1>

            <p className="text-white text-lg md:text-lg">
              <div className="lg:max-w-5xl">
                Better data leads to more performant models. Performant models
                lead to faster deployment. We help deliver value from AI
                investments faster with better data by providing an end-to-end
                solution to manage the entire ML&nbsp;lifecycle.
              </div>
            </p>
          </div>
        </div>
      </div>

      <div className="p-2 text-white mb-20">
        <div>
          <p className="text-xl mb-2 text-gradient">Leadership - </p>
          <div className="text-3xl mb-16">Founding team</div>

          <div className="flex flex-row flex-wrap justify-evenly">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="w-full md:w-1/4 lg:w-1/5 team-block inline-block mx-3 mb-16 align-top"
              >
                <div
                  className="team-item"
                  onClick={() => openMemberModal(member.id - 1)}
                >
                  <div className="thumbnail overflow-hidden mb-9 w-xs h-48">
                    <img
                      src={`${member.image}`}
                      className="h-full rounded-lg"
                      alt=""
                    />
                  </div>
                  {/* <div
                    className="thumbnail border border-gray-800 rounded-lg overflow-hidden bg-no-repeat bg-cover mb-9"
                    style={{
                      backgroundImage: `url(${BackGroundMember})`,
                    }}
                  >
                    <img
                      width="601"
                      height="601"
                      src={`${member.image}`}
                      className="size-full"
                      alt=""
                      loading="lazy"
                      srcSet={member.image}
                      sizes="(max-width: 601px) 100vw, 601px"
                    />
                  </div> */}

                  <div className="member-header text-center text-sm text-purple-400">
                    <div className="font-bold">{member.name}</div>
                    <div className="member_designation">{member.position}</div>
                  </div>
                </div>

                {modalIsVisible[member.id - 1] && (
                  <MemberModal
                    member={member}
                    closeMemberModal={closeMemberModal}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 1 */}
      <div className="text-white px-2 xl:px-0">
        <div className="text-3xl text-gray-400 mb-10">
          Why do 90% of clients renew contracts with us?
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center mb-14">
          <div className="w-full mb-10 md:w-1/2 md:mb-0">
            <div className="text-xl mb-4">ANNOTATION ACCURACY</div>
            <div>
              Deliver manual labeling with structured QA/QC process to ensure
              the highest quality with thorough project management. Cypher AI
              provides a fully dedicated engagement manager who will ensure
              smooth on-boarding and continued data delivery.
            </div>
          </div>

          <div className="w-full mb-10 md:w-1/2 md:mb-0">
            <div>
              <img src={img14} alt="" />
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-row flex-wrap justify-center items-center mb-14">
          <div className="w-full mb-10 md:w-1/2 md:mb-0">
            <div className="text-xl mb-4">SCALABILITY</div>
            <div>
              Maintain quality for a large scale dataset with +10,000
              experienced annotators. Cypher AI created a job opportunity for
              disadvantaged and poor people in the central area of Vietnam such
              as Da Nang, Quang Binh, Quy Nhon, etc.
            </div>
          </div>

          <div className="w-full mb-10 md:w-1/2 md:mb-0">
            <div>
              <img src={img15} alt="" />
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="flex flex-row flex-wrap justify-center items-center mb-14">
          <div className="w-full mb-10 md:w-1/2 md:mb-0">
            <div className="text-xl mb-4">COST-EFFICIENT SOLUTION</div>
            <div>
              Eliminate high risk of opportunity cost. We can offer the most
              cost-effective solution for high-quality labels at any volume. The
              main reasons come from our business's cost structure and
              inexpensive-yet-professional annotation team.
            </div>
          </div>

          <div className="w-full mb-10 md:w-1/2 md:mb-0">
            <div>
              <img src={img16} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
