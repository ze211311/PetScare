import React from 'react'
import { Card } from "flowbite-react";
import Image from "./img/studiot.jpg";
import { useNavigate } from "react-router-dom"; //use for change page
import Cookies from 'universal-cookie'; //use for manage cookie

const Status_post = () => {
  const cookie = new Cookies(); //create val to use cookie
  const navigate = useNavigate(); //create val to navigate
  React.useEffect(() => {
    if (cookie.get("token") == undefined) {
      navigate("/")
    }
  }, []);
  return (
    <div>
      <Card className='mx-2 my-2'>
        <img
          className="h-50 w-full object-cover md:h-full md:w-48 mx-auto"
          src={Image}
          alt="Profile Pic"
        />
        <div className="flex">
          <img
            className="lg:h-16 lg:w-16 md:h-10 md:w-10 object-cover rounded-xl h-10 w-10"
            src={Image}
            alt="Profile Pic"
          />
          <h1 className="lg:text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:p-5 pl-3 my-auto">
            Natthaphum Kongsatjaviwat
          </h1>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
      <Card className='mx-2 my-2'>
        <img
          className="h-50 w-full object-cover md:h-full md:w-48 mx-auto"
          src={Image}
          alt="Profile Pic"
        />
        <div className="flex">
          <img
            className="lg:h-16 lg:w-16 md:h-10 md:w-10 object-cover rounded-xl h-10 w-10"
            src={Image}
            alt="Profile Pic"
          />
          <h1 className="lg:text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:p-5 pl-3 my-auto">
            Natthaphum Kongsatjaviwat
          </h1>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
      <Card className='mx-2 my-2'>
        <img
          className="h-50 w-full object-cover md:h-full md:w-48 mx-auto"
          src={Image}
          alt="Profile Pic"
        />
        <div className="flex">
          <img
            className="lg:h-16 lg:w-16 md:h-10 md:w-10 object-cover rounded-xl h-10 w-10"
            src={Image}
            alt="Profile Pic"
          />
          <h1 className="lg:text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:p-5 pl-3 my-auto">
            Natthaphum Kongsatjaviwat
          </h1>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  )
}

export default Status_post