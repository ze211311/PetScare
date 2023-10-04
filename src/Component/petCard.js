import { View, Text } from 'react-native'
import React from 'react'
import Image from "./img/studiot.jpg"
import { Card } from 'flowbite-react';

const PetCard = (context) => {
  const picPath = (context.item.petpicpath != null) ? context.item.petpicpath : "Pplaceholder.png";
  return (
    <a href="#" className="flex flex-col items-center mt-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="h-50 w-full object-cover md:h-full md:w-48"
        src={"http://localhost:6969/images/petProfile/" + picPath}
        alt="Profile Pic"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 my-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{context.item.pet_name}</h5>
        <p className="mt-1 text-slate-500">
          <span className='text-purple-500'>Weight : </span>{context.item.weight}
        </p>
        <p className="mt-1 text-slate-500">
          <span className='text-purple-500'>Age : </span>{context.item.age}
        </p>
        <p className="mt-1 text-slate-500">
          <span className='text-purple-500'>Clinic : </span>{context.item.clinic}
        </p>
        <p className="mt-1 text-slate-500">
          <span className='text-purple-500'>Veterinarian : </span>{context.item.Vet_name}
        </p>
      </div>
    </a>
  )
}

export default PetCard