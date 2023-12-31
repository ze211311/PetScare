import { View, Text } from 'react-native'
import React from 'react'

const admin_menu = () => {
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
    </div>
  )
}

export default admin_menu