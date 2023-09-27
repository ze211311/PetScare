import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React from "react";
import { useState } from "react";
import Cookies from 'universal-cookie';//use for manage cookie
import { useNavigate } from "react-router-dom"; //user for change page
import axios from 'axios';

const Modal_reg = () => {
  const [openModal, setOpenModal] = useState("");
  const cookie = new Cookies(); //create val to use cookie
  const navigate = useNavigate(); //create val to navigate

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [tel, setTel] = useState('');

  const RegisButton = async () => {
    if (email != "" && username != "" && password != "" && fullName != "" && tel != "") {
      const res = await axios.post('http://localhost:6969/regis', {
        "email": email,
        "username": username,
        "password": password,
        "tel": tel,
        "fullName": fullName
      });
      cookie.set("token", res.data.accessToken); //set new cookie name token
      if (cookie.get("token") != undefined) {
        navigate("/petScare")
      }
      setOpenModal(undefined);
    }
  }
  return (
    <>
      <button className="underline text-purple-500 hover:text-purple-700" onClick={() => setOpenModal('form-elements')}>Register</button>
      <Modal show={openModal === 'form-elements'} size="md" popup onClose={() => setOpenModal(undefined)}>
        <Modal.Body className="pt-8 bg-yellow-100 rounded">
          <div className="space-y-6 bg-yellow-100">
            <div className="grid grid-cols-4">
              <h3 className="text-xl col-span-3 font-medium text-gray-900 dark:text-white">Sign up to our platform</h3>
              <button className="text-xl ml-10" onClick={() => setOpenModal(undefined)}>X</button>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" placeholder="name@tni.ac.th" required onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username : " />
              </div>
              <TextInput id="username" type="text" placeholder="Username" required onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password :" />
              </div>
              <TextInput id="password" type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Fullname" value="Fullname : " />
              </div>
              <TextInput id="Fullname" type="text" placeholder="Firstname Lastname" required onChange={e => setFullName(e.target.value)} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Your phone number :" />
              </div>
              <TextInput id="tel" type="text" placeholder="0812345678" maxLength="10" required onChange={e => setTel(e.target.value)} />
            </div>
            <div className="w-full">
              <Button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                onClick={() => {
                  RegisButton()
                }}>Register</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal >
    </>
  );
};

export default Modal_reg;
