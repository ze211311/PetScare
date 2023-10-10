import React from 'react'
import { Card } from "flowbite-react";
import Image from "./img/studiot.jpg";
import { useNavigate, useLocation } from "react-router-dom"; //use for change page
import Cookies from 'universal-cookie'; //use for manage cookie
import axios from 'axios';

const Status_post = (context) => {
  const cookie = new Cookies(); //create val to use cookie
  const navigate = useNavigate(); //create val to navigate
  const [Status, setStatus] = new React.useState([])
  const location = useLocation().hash;
  React.useEffect(() => {
    if (cookie.get("token") == undefined) {
      navigate("/")
    }
    else {
     axios.get("http://localhost:6969/pet/getStatus?id=" + location[1]).then((response)=>{
      setStatus(response.data)
      console.log(Status)
    })
    }
  }, []);
  return (
    <div>
    {(Status.length != 0) ? Status.map((item, i)=> 
    <div key={i} item={item} >
      <Card className='mx-2 mt-2 mb-2'>
        {(item.stapicpath != null) ? <img
          className="h-50 w-full object-cover md:h-full md:w-48 mx-auto"
          src={Image}
          alt="Profile Pic"
        /> : <></>}
        <div className="flex">
          <img
            className="lg:h-16 lg:w-16 md:h-10 md:w-10 object-cover rounded-xl h-10 w-10"
            src={"http://localhost:6969/images/userProfile/" + item.propic_path}
            alt="Profile Pic"
          />
          <h1 className="lg:text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:p-5 pl-3 my-auto">
            {item.Vet_name}
          </h1>
          
        </div>
        <h3 className="font-bold tracking-tight text-gray-900 dark:text-white pl-2 my-auto">
            Symptom : {item.Sym_name}
          </h3>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {item.Sdesc}
        </p>
      </Card>
    </div>) : <div className="text-center p-2">YOU HAVE NO STATUS REPORT!!!</div>}
    </div>
  )
}

export default Status_post