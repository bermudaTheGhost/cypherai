import React, { useState } from "react";
import FlagIcon from "../../images/flag.svg";
import BackGroundMember from "../../images/member_background.svg";
import "../../styles/about-us.css";
import MemberModal from "./member-modal";

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
      name: "ALEX RATNER",
      position: "Co-founder & CEO",
      image: "https://snorkel.ai/wp-content/uploads/2021/03/Alex-Photo-min.png",
      description:
        "Alex is a co-founder and CEO at Snorkel AI, and an Assistant Professor of Computer Science at the University of Washington. Before Snorkel AI, he completed his Ph.D. in CS at the Stanford AI lab.",
    },
    {
      id: 2,
      name: "RICK TRAN",
      position: "Co-founder",
      image:
        "https://snorkel.ai/wp-content/uploads/2021/03/Chris-Re-Photo-min.png",
      description:
        "Rick is a co-founder at Snorkel AI, and an Associate Professor in the Department of Computer Science at Stanford University. He is in the Stanford AI Lab and is affiliated with the Statistical Machine Learning Group. He has co-founded four companies, including Snorkel AI, SambaNova Systems, Lattice (acq. by Apple), and Inductiv (acq. by Apple) based on his research into ML systems and has received the MacArthur “Genius” Award.",
    },
    {
      id: 3,
      name: "CHRIS SANNO",
      position: "Co-founder & Head of Solutions",
      image:
        "https://snorkel.ai/wp-content/uploads/2021/03/Paroma-Photo-min.png",
      description:
        "CHRIS is a co-founder and Head of Solutions at Snorkel AI. She received her Ph.D. from Stanford University focusing on weak supervision and making machine learning easily usable for domain experts and collaborated with teams at Facebook and Intel.",
    },
    {
      id: 4,
      name: "BRADLEY SINBAD",
      position: "Co-founder & Head of Technology",
      image:
        "https://snorkel.ai/wp-content/uploads/2021/03/Braden-photo-min.png",
      description:
        "BRADLEY is a co-founder and Head of Technology at Snorkel AI. Before Snorkel, Braden researched and developed new interfaces to machine learning systems in academia (Stanford, MIT, Johns Hopkins, BYU) and industry (Facebook, Google).",
    },
    {
      id: 5,
      name: "HENRY CAMACHO",
      position: "Co-founder & Head of Engineering",
      image:
        "https://snorkel.ai/wp-content/uploads/2021/03/Henry-photo-min.png",
      description:
        "Henry is co-founder and Head of Engineering at Snorkel AI. Before Snorkel AI, Henry was the tech lead for Facebook Applied AI’s representation learning team and spent his time in grad school building the Snorkel research library.",
    },
  ];

  return (
    <div className="about-us-section">
      <div className="mb-20">
        <div class="absolute inset-0 z-0 pointer-events-none isLoaded">
          <div className="gradient-background" />
          <div class="absolute inset-0 w-full bg-gradient-to-b from-black" />
        </div>

        <div className="px-4 lg:px-0 py-16 lg:py-32 xl:py-56 xl:pt-40">
          <div className="container relative lg:px-8">
            <img
              class="mt-0  mb-8 h-16 md:h-18"
              src={FlagIcon}
              alt="About Page Icon"
            />

            <h1 class="text-white font-aeonik font-light text-4xl md:text-7xl mb-8">
              <div class="lg:max-w-6xl">
                Our mission is to accelerate the development of
                AI&nbsp;applications
              </div>
            </h1>

            <p class="text-white text-lg md:text-lg">
              <div class="lg:max-w-5xl">
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
          <p className="text-xl mb-2">Leadership - </p>
          <div className="text-3xl mb-16">Executive Team</div>

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
                  <div
                    className="thumbnail border border-gray-800 rounded-lg overflow-hidden bg-no-repeat bg-cover mb-9"
                    style={{
                      backgroundImage: `url(${BackGroundMember})`,
                    }}
                  >
                    <img
                      width="601"
                      height="601"
                      src={`${member.image}`}
                      class="attachment-full size-full wp-post-image"
                      alt=""
                      loading="lazy"
                      srcset="https://snorkel.ai/wp-content/uploads/2021/03/Alex-Photo-min.png 601w, https://snorkel.ai/wp-content/uploads/2021/03/Alex-Photo-min-300x300.png 300w, https://snorkel.ai/wp-content/uploads/2021/03/Alex-Photo-min-150x150.png 150w, https://snorkel.ai/wp-content/uploads/2021/03/Alex-Photo-min-100x100.png 100w"
                      sizes="(max-width: 601px) 100vw, 601px"
                    />
                  </div>

                  <div className="member-header text-center text-sm text-purple-400">
                    <div class="font-bold">{member.name}</div>
                    <div class="member_designation">{member.position}</div>
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

      <div className="text-white px-2 xl:px-0">
        <div className="text-3xl text-gray-400 mb-10">Capability & Scale</div>

        <div className="flex flex-row flex-wrap justify-center items-center mb-14">
          <div className="w-full mb-10 md:w-1/2 md:mb-0">
            <div className="text-xl mb-4">Cost Effective</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptatibus, reprehenderit neque aspernatur, necessitatibus
              voluptatem vero ad nulla, quaerat quidem laborum eius eos quos
              maxime aperiam omnis earum tempore magnam.
            </div>
          </div>

          <div className="w-full mb-10 md:w-1/2 md:mb-0">
            <div
              style={{ background: "white", width: "300px", height: "300px" }}
            ></div>
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-row flex-wrap justify-center items-center mb-14">
          <div className="w-full mb-10 md:w-1/2 md:mb-0">
            <div className="text-xl mb-4">Cost Effective</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptatibus, reprehenderit neque aspernatur, necessitatibus
              voluptatem vero ad nulla, quaerat quidem laborum eius eos quos
              maxime aperiam omnis earum tempore magnam.
            </div>
          </div>

          <div className="w-full mb-10 md:w-1/2 md:mb-0">
            <div
              style={{ background: "white", width: "300px", height: "300px" }}
            ></div>
          </div>
        </div>

        {/* 3 */}
        <div className="flex flex-row flex-wrap justify-center items-center mb-14">
          <div className="w-full mb-10 md:w-1/2 md:mb-0">
            <div className="text-xl mb-4">Cost Effective</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptatibus, reprehenderit neque aspernatur, necessitatibus
              voluptatem vero ad nulla, quaerat quidem laborum eius eos quos
              maxime aperiam omnis earum tempore magnam.
            </div>
          </div>

          <div className="w-full mb-10 md:w-1/2 md:mb-0">
            <div
              style={{ background: "white", width: "300px", height: "300px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
