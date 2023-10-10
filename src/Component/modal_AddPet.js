import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import jwt from "jwt-decode";
import Cookies from 'universal-cookie'; //use for manage cookie


const Modal_AddPet = () => {
  const [openModal, setOpenModal] = useState("");
  const [pet_name, setPet_name] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0.0);
  const [clinic, setClinic] = useState("");
  const [petType, setPetType] = useState("");
  const cookie = new Cookies();

  const conn = () => {
    axios.post('http://localhost:6969/pet/regPet'  , {
      "pname" : pet_name,
      "age" : age,
      "weight" : weight,
      "clinic" : clinic,
      "pType" : petType,
      "id" : jwt(cookie.get("token")).ID
    })
    setOpenModal(undefined);
    window.location.reload(false);
  }

  return (
    <>
      <button
            data-tooltip-target="tooltip-new"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 font-medium bg-yellow-500 rounded-full hover:bg-yellow-300 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800" onClick={() => setOpenModal('form-elements')}>
             <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg> </button>
      <Modal show={openModal === 'form-elements'} size="md" popup onClose={() => setOpenModal(undefined)}>
        <Modal.Body className="pt-8 bg-yellow-100 rounded">
          <div className="space-y-6 bg-yellow-100">
            <div className='grid grid-cols-2'>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Pet Profile</h3>
              <button className="ml-32 text-xl" onClick={() => setOpenModal(undefined)}>X</button>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="petname" value="Pet name" />
              </div>
              <TextInput id="petname" placeholder="pong" required value={pet_name} onChange={e => { setPet_name(e.target.value) }} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="age" value="age" />
              </div>
              <TextInput id="age" type="number" placeholder="69" required value={age} onChange={e => { setAge(e.target.value) }} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="weight" value="Weight" />
              </div>
              <TextInput id="weight" type="number" placeholder="69.420" required value={weight} onChange={e => { setWeight(e.target.value) }} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="clinic" value="clinic" />
              </div>
              <TextInput id="clinic" type="text" placeholder="Tana Pong clinic" required value={clinic} onChange={e => { setClinic(e.target.value) }} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="type" value="pet type" />
              </div>
              <TextInput id="type" type="text" placeholder="dog/cat/etc." required value={petType} onChange={e => { setPetType(e.target.value) }} />
            </div>
            <div className="w-full">
              <Button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={()=> conn()}>Register</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modal_AddPet;