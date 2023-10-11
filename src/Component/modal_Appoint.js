import { StyleSheet, Text, View } from "react-native";
import { Button, Checkbox, Label, Modal, TextInput, Table } from 'flowbite-react';
import React from "react";
import Popup from 'reactjs-popup';
import { useState, useEffect } from "react";
import Image_2 from "./img/cal.png";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Modal_appoint = () => {
  const location = new useLocation().hash;
  const [openModal, setOpenModal] = useState("");
  const [app, setApp] = new useState([]);
  useEffect(()=>{
    axios.get("http://localhost:6969/pet/getApp?id=" + location.split('#')[1]).then((response)=>{
      setApp(response.data)
      console.log(response.data)
    })
  },[])
  return (
    <>
      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-purple-600" onClick={() => setOpenModal('form-elements')}>
        <img
          className="h-50 w-full object-cover md:h-full md:w-48"
          src={Image_2}
          alt="Profile Pic"
        />

      </button>
      <Modal show={openModal === 'form-elements'} size="xl" popup onClose={() => setOpenModal(undefined)}>
        <Modal.Body className="pt-8 bg-yellow-100 rounded">
          <div className="space-y-6 bg-yellow-100">
          <div className="grid grid-cols-2">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Appointment</h3>
              <button className="ml-56 text-xl" onClick={() => setOpenModal(undefined)}>X</button>
            </div>
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>
                  Date
                </Table.HeadCell>
                <Table.HeadCell>
                  Vet.
                </Table.HeadCell>
                <Table.HeadCell>
                  Treatment.
                </Table.HeadCell>
                <Table.HeadCell>
                  Symptom.
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
              {(app.length != 0) ? app.map((item, i)=> 
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={i}>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.Appdate.split("T")[0]}
                  </Table.Cell>
                  <Table.Cell>
                    {item.Vet_name}
                  </Table.Cell>
                  <Table.Cell>
                    {item.Tre_name}
                  </Table.Cell>
                  <Table.Cell>
                    {item.Sym_name}
                  </Table.Cell>
                </Table.Row>) : <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  </Table.Cell>
                  <Table.Cell>
                  </Table.Cell>
                  <Table.Cell>
                  </Table.Cell>
                  <Table.Cell>
                  </Table.Cell>
                </Table.Row>}
              </Table.Body>
            </Table>
            <div className="w-full">
              <Button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">Register</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modal_appoint;
