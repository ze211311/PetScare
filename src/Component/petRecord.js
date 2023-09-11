import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Image from "./img/studiot.jpg"
import Image_2 from "./img/record_butt.png"
import Modal_editProf from "./modal_EditProf";

const petRecord = () => {
  return (
    <div>
      <div className="my-10 mx-auto max-w-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-max">
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
              Narongkorn Sangayotin
            </div>
            <p className="mt-1 text-slate-500">Tel : 086-1234567</p>
            <p className="mt-1 text-slate-500">
              Email : ze.narongkorn_st@tni.ac.th
            </p>
            <Modal_editProf/>
          </div>
        </div>
      </div>
      <div className="my-10 mx-auto max-w-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-max">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Isabella
            </div>
            <p className="mt-1 text-slate-500">Age : 3 Y</p>
            <p className="mt-1 text-slate-500">
              Type : Dog
            </p>
            <p className="mt-1 text-slate-500">
              Weight : 20 KG.
            </p>
            <p className="mt-1 text-slate-500">
              Birth-Date : 9/9/2023
            </p>
            <p className="mt-1 text-slate-500">
              Clinic : Sunshine Cleaning Clinic
            </p>
            <p className="mt-1 text-slate-500">
              Veterinarian : Natthaphum Kongsatjaviwat
            </p>
            <div className='grid grid-cols-3 divide-x-8 divide-white'>
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-purple-600">
                <img
              className="h-50 w-full object-cover md:h-full md:w-48"
              src= {Image_2}
              alt="Profile Pic"
            />
                </button>
            </div>
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-purple-600">
                <img
              className="h-50 w-full object-cover md:h-full md:w-48"
              src= {Image_2}
              alt="Profile Pic"
            />
                </button>
            </div>
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-purple-600">
                <img
              className="h-50 w-full object-cover md:h-full md:w-48"
              src= {Image_2}
              alt="Profile Pic"
            />
                </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default petRecord

const styles = StyleSheet.create({})