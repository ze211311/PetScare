import React from "react";
import Image from "../Component/img/studiot.jpg";
import Status_post from "../Component/status_post";

const petStatus = () => {
  return (
    <div>
      <div className="my-10 mx-auto max-w-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-max">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-50 w-full object-cover md:h-full md:w-48"
              src={Image}
              alt="Profile Pic"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Isabella
            </div>
            <p className="mt-1 text-slate-500">Age : 3 Y</p>
            <p className="mt-1 text-slate-500">Type : Dog</p>
          </div>
        </div>
      </div>
      <div className="grid lg:w-1/2 w-full mx-auto p-2 ">
        <Status_post imgPath={Image} ProfilePath={Image} Name={"Natthaphum Kongsatjaviwat"} Message={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."} />
      </div>
    </div>
  );
};

export default petStatus;