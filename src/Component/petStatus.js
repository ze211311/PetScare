import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Image from "./img/studiot.jpg";
import { Card } from "flowbite-react";
import Status_post from "./status_post";

const petStatus = () => {
  return (
    <div>
      <div className="mx-2 my-10">
        <div className="mx-auto align-middle max-w-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-max">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-50 w-full object-cover md:h-full md:w-48"
                src= {Image}
                alt="Profile Pic"
              />
            </div>
            <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Isabella
              </div>
              <p className="mt-1 text-slate-500">Age : 3 Y</p>
              <p className="mt-1 text-slate-500">
                Type : Dog
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:w-1/2 w-full mx-auto p-2 ">
        <Status_post/>
      </div>
    </div>
  );
};

export default petStatus;

const styles = StyleSheet.create({});
