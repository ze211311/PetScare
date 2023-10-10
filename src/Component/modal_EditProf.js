import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import jwt from "jwt-decode";
import Cookies from 'universal-cookie'; //use for manage cookie

const Modal_editProf = (context) => {
  const cookie = new Cookies(); //create val to use cookie
  const [openModal, setOpenModal] = useState("");

  const [tel, setTel] = new useState('');
  const [username, setUsername] = new useState('');
  const [password, setPassword] = new useState('');
  const [email, setEmail] = new useState('');

  const [profile, setProfile] = useState();

  useEffect(() => {
    setEmail(context.email)
    setUsername(context.username)
    setPassword(context.pd)
    setTel(context.tel)
    setProfile()
  }, [openModal]);


  const updateProfile = async () => {
    if (profile != null) {
      const res = await axios.post('http://localhost:6969/upload/UProfile?ID=' + jwt(cookie.get("token")).ID, profile)
    }
    const res = await axios.post("http://localhost:6969/user/update?id=" + jwt(cookie.get("token")).ID, {
      "phone": tel,
      "username": username,
      "password": password,
      "email": email
    })
    setOpenModal(undefined);
    window.location.reload(false);
  }

  return (
    <>
      <Button className="mt-10 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={() => setOpenModal('form-elements')}>Edit Profile</Button>
      <Modal show={openModal === 'form-elements'} size="md" popup onClose={() => setOpenModal(undefined)}>
        <Modal.Body className="pt-8 bg-yellow-100 rounded">
          <div className="space-y-6 bg-yellow-100">
            <div className="grid grid-cols-2">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Profile</h3>
              <button className="ml-32 text-xl" onClick={() => setOpenModal(undefined)}>X</button>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" placeholder="name@tni.ac.th" value={email} required onChange={e => { setEmail(e.target.value) }} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username : " />
              </div>
              <TextInput id="username" type="text" placeholder="Username" required value={username} onChange={e => { setUsername(e.target.value) }} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password :" />
              </div>
              <TextInput id="password" type="password" placeholder="Password" required value={password} onChange={e => { setPassword(e.target.value) }} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Your phone number :" />
              </div>
              <TextInput id="tel" type="text" placeholder="0812345678" maxLength="10" required value={tel} onChange={e => { setTel(e.target.value) }} />
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
                }} />
              {(profile != null) ? <img src={URL.createObjectURL(profile[0])} /> : <></>}
            </div>
            <div className="w-full">
              <Button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" type='button'
                onClick={() => updateProfile()}
              >Register</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modal_editProf;
