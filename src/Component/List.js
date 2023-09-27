import React, { useState } from "react";
import Modal_editProf from "./modal_EditProf";
import BNav from "./BNav";
import PetCard from "./petCard";
import { useNavigate } from "react-router-dom"; //use for change page
import Cookies from 'universal-cookie'; //use for manage cookie
import axios from 'axios';
import jwt from "jwt-decode";

const List = () => {
  const cookie = new Cookies(); //create val to use cookie
  const navigate = useNavigate(); //create val to navigate

  // user info
  const [FName, setFName] = new useState('');
  const [tel, setTel] = new useState('');
  const [email, setEmail] = new useState('');
  const [PicPath, setPicPath] = new useState('/Uplaceholder.png');

  //pet info
  const [AllPet, setAllPet] = new useState([]);

  React.useEffect(() => {
    if (cookie.get("token") == undefined) {
      navigate("/")
    }
    else {
      axios.get("http://localhost:6969/getUser?id=" + jwt(cookie.get("token")).ID).then(response => {
        setFName(response.data[0].Full_name);
        setTel(response.data[0].tel)
        setEmail(response.data[0].email)
        if (response.data[0].propic_path != null) {
          setPicPath(response.data[0].propic_path)
        }
      })
    }
  }, []);

  return (
    <div>
      <div className="my-10 mx-auto max-w-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-max">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-50 w-full object-cover md:h-full md:w-48"
              src={"http://localhost:6969/images/userProfile/" + PicPath}
              alt="Profile Pic"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {FName}
            </div>
            <p className="mt-1 text-slate-500">Tel : {tel}</p>
            <p className="mt-1 text-slate-500">
              Email : {email}
            </p>
            <Modal_editProf />
          </div>
        </div>
      </div>
      <div className="my-10 mx-auto max-w-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-max">
        {(AllPet.length != 0) ? <PetCard PPicPath="pong.png" /> : <div className="text-center p-2">YOU HAVE NO PET ON OUR PLATFORM!!!</div>}
      </div>
      <BNav />
    </div>
  );
};

export default List;
