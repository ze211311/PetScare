import { React, useState, useEffect } from 'react'
import Image_2 from "./img/record_butt.png"
import Modal_Vacc from './modal_Vacc';
import Modal_appoint from './modal_Appoint';
import Modal_editPet from './modal_EditPet';
import BNav from './BNav';
import { useNavigate, useLocation } from "react-router-dom"; //use for change page
import Cookies from 'universal-cookie'; //use for manage cookie
import axios from "axios";

const PetRecord = () => {
  const cookie = new Cookies(); //create val to use cookie
  const navigate = useNavigate(); //create val to navigate
  const location = useLocation().hash;
  const [pet, setPet] = useState({});
  const [ppath, setppath] = useState("/Pplaceholder.png");

  useEffect(() => {
    if (cookie.get("token") == undefined) {
      navigate("/")
    }
    else {
      axios.get("http://localhost:6969/user/getAPet?id=" + location.slice(1)).then(response => {
        setPet(response.data[0])
        if (response.data[0].petpicpath != null) {
          setppath(response.data[0].petpicpath)
        }
      })
    }
  }, []);

  return (
    <div>
      <div className="my-5 mx-auto max-w-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-max">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-50 w-full object-cover md:h-full md:w-48"
              src={"http://localhost:6969/images/petProfile/" + ppath}
              alt="Profile Pic"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {pet.pet_name}
            </div>
            <p className="mt-1 text-slate-500">Age : {pet.age} Y</p>
            <p className="mt-1 text-slate-500">
              Type : {pet.petType}
            </p>
            <Modal_editPet pet={pet} />
          </div>
        </div>
      </div>
      <div className="my-10 mx-auto max-w-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-max">
        <div className="md:flex">
          <div className="p-8">

            <p className="mt-1 text-slate-500">
              <span className='text-purple-500'>Weight : </span>{pet.weight} KG.
            </p>
            <p className="mt-1 text-slate-500">
              <span className='text-purple-500'>Birth-date : </span>
            </p>
            <p className="mt-1 text-slate-500">
              <span className='text-purple-500'>Clinic : </span>{pet.clinic}
            </p>
            <p className="mt-1 text-slate-500">
              <span className='text-purple-500'>Veterinarian : </span>{pet.Vet_name}
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