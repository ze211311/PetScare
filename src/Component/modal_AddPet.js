import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React from "react";
import { useState, useEffect } from "react";

const Modal_AddPet = (context) => {
  const [openModal, setOpenModal] = useState("");
  const [pid, setpid] = useState("");
  const [pet_name, setPet_name] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0.0);
  const [clinic, setClinic] = useState("");
  const [petType, setPetType] = useState("");
  const [profile, setProfile] = useState();

  useEffect(() => {
    console.log(context)
    setpid(context.pet.pid)
    setPet_name(context.pet.pet_name)
    setAge(context.pet.age)
    setWeight(context.pet.weight)
    setClinic(context.pet.clinic)
    setPetType(context.pet.petType)
    setProfile()
  }, [openModal]);

  return (
    <>
      <Button className="mt-10 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={() => setOpenModal('form-elements')}>Edit Profile</Button>
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
            <div>
              <div className="mb-2 block">
                <Label id="profile" value="Your profile image" />
              </div>
              <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                type="file"
                id="userProfile"
                accept="image/*"
                onChange={() => {
                  const file = document.getElementById('userProfile').files;
                  setProfile(file);
                  console.log(file)
                }} />
              {(profile != null) ? <img src={URL.createObjectURL(profile[0])} /> : <></>}
            </div>
            <div className="w-full">
              <Button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">Register</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modal_AddPet;