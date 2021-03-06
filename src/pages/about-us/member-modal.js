import React from "react";
import BackGroundMember from "../../images/member_background.svg";
import TwitterIcon from "../../images/twitter-icon.svg";
import LinkedinIcon from "../../images/linkedin-icon.svg";

const MemberModal = ({ member, closeMemberModal }) => {
  return (
    <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover opacity-95">
      <div
        className="absolute bg-black opacity-80 inset-0 z-0"
        onClick={closeMemberModal}
      />

      <div className="w-full max-w-2xl p-10 relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
        {/* <!--content--> */}
        <div className="">
          {/* <!--body--> */}
          <div className="flex flex-row justify-start items-center mb-7">
            <div className="" style={{ width: "80px", height: "80px" }}>
              <div className="thumbnail overflow-hidden mb-9 border border-gray-400 rounded-lg">
                <img
                  src={`${member.image}`}
                  className="h-full rounded-lg"
                  alt=""
                />
              </div>
            </div>

            <div className="text-lg text-gray-600 px-8">
              <p>{member.name}</p>
              <p>{member.position}</p>
            </div>
          </div>

          <div className="text-gray-600 mb-7">{member.description}</div>

          <div className="flex flex-row items-center">
            <img src={TwitterIcon} alt="twitter-icon" />
            <div
              className="border border-gray-400 mx-2"
              style={{ height: 25 }}
            ></div>
            <img src={LinkedinIcon} alt="linkedin-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberModal;
