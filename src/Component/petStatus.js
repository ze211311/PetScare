import { React, useState, useEffect } from "react";
import Status_post from "./status_post";
import { useNavigate, useLocation } from "react-router-dom"; //use for change page
import Cookies from 'universal-cookie'; //use for manage cookie
import axios from "axios";

const PetStatus = () => {
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
        console.log(response.data)
        setPet(response.data[0])
        if (response.data[0].petpicpath != null) {
          setppath(response.data[0].petpicpath)
        }
      })
    }
  }, []);

  return (
    <div>
      <div className="mx-2 my-10">
        <div className="mx-auto align-middle max-w-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-max">
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
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:w-1/2 w-full mx-auto p-2 ">
        <Status_post />
      </div>
    </div>
  );
};

export default PetStatus;