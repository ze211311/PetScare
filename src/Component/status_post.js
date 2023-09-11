import React from 'react'
import { Card } from "flowbite-react";

const Status_post = (props) => {
  return (
    <Card>
      <img
        className="h-50 w-full object-cover md:h-full md:w-48 mx-auto"
        src={props.imgPath}
        alt="Profile Pic"
      />
      <div className="flex">
        <img
          className="lg:h-16 lg:w-16 md:h-10 md:w-10 object-cover rounded-xl h-10 w-10"
          src={props.ProfilePath}
          alt="Profile Pic"
        />
        <h1 className="lg:text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:p-5 pl-3 my-auto">
          {props.Name}
        </h1>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.Message}
      </p>
    </Card>
  )
}

export default Status_post
