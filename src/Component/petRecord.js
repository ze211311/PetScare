import React from 'react'
import Image from "./img/studiot.jpg"
import Image_2 from "./img/record_butt.png"
import Modal_editProf from "./modal_EditProf";
import Modal_Vacc from './modal_Vacc';
import Modal_appoint from './modal_Appoint';
import Modal_editPet from './modal_EditPet';
import BNav from './BNav';
import { useNavigate } from "react-router-dom"; //use for change page
import Cookies from 'universal-cookie'; //use for manage cookie

const PetRecord = () => {
  const cookie = new Cookies(); //create val to use cookie
  const navigate = useNavigate(); //create val to navigate
  React.useEffect(() => {
    if (cookie.get("token") == undefined) {
      navigate("/")
    }
  }, []);

  return (
    <div>
      <div className="my-5 mx-auto max-w-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-max">
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
            <p className="mt-1 text-slate-500">
              Type : Dog
            </p>
            <Modal_editPet />
          </div>
        </div>
      </div>
      <div className="my-10 mx-auto max-w-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-max">
        <div className="md:flex">
          <div className="p-8">

            <p className="mt-1 text-slate-500">
              <span className='text-purple-500'>Weight : </span>20 KG.
            </p>
            <p className="mt-1 text-slate-500">
              <span className='text-purple-500'>Birth-date : </span>9/9/2023
            </p>
            <p className="mt-1 text-slate-500">
              <span className='text-purple-500'>Clinic : </span>Sunshine Cleaning Clinic
            </p>
            <p className="mt-1 text-slate-500">
              <span className='text-purple-500'>Veterinarian : </span>Natthaphum Kongsatjaviwat
            </p>
            <div className='grid grid-cols-3 divide-x-8 divide-white'>
              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-purple-600">
                  <img
                    className="h-50 w-full object-cover md:h-full md:w-48"
                    src={Image_2}
                    alt="Profile Pic"
                  />
                </button>
              </div>
              <div className="mt-6">
                <Modal_appoint />
              </div>
              <div className="mt-6">
                <Modal_Vacc />

              </div>
            </div>
          </div>
        </div>
      </div>
      <BNav />
    </div>

  )
}

export default PetRecord