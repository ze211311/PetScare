import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React from "react";
import { useState } from "react";

const Modal_editProf = () => {
  const [openModal, setOpenModal] = useState("");
  return (
    <>
      <Button className="mt-10 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={() => setOpenModal('form-elements')}>Edit Profile</Button>
      <Modal show={openModal === 'form-elements'} size="md" popup onClose={() => setOpenModal(undefined)}>
        <Modal.Body className="pt-8 bg-yellow-100 rounded">
          <div className="space-y-6 bg-yellow-100">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Pet Profile</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" placeholder="name@tni.ac.th" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username : " />
              </div>
              <TextInput id="username" type="text" placeholder="Username" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password :" />
              </div>
              <TextInput id="password" type="password" placeholder="Password" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Your phone number :" />
              </div>
              <TextInput id="tel" type="text" placeholder="0812345678" maxLength="10" required />
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

export default Modal_editProf;