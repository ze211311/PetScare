import { Button, Label, Modal, TextInput, Table } from "flowbite-react";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import Cookies from "universal-cookie"; //use for manage cookie

const Modal_VeriPet = () => {
  const [openModal, setOpenModal] = useState("");
  const [pet_name, setPet_name] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0.0);
  const [clinic, setClinic] = useState("");
  const [petType, setPetType] = useState("");
  const cookie = new Cookies();

  const verifyPet = () => {
    axios.post("http://localhost:6969/pet/regPet", {
      pname: pet_name,
      age: age,
      weight: weight,
      clinic: clinic,
      pType: petType,
      id: jwt(cookie.get("token")).ID,
    });
    setOpenModal(undefined);
    window.location.reload(false);
  };

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
      <Modal
        show={openModal === "form-elements"}
        size="xl"
        popup
        onClose={() => setOpenModal(undefined)}
      >
        <Modal.Body className="pt-8 bg-yellow-100 rounded">
          <div className="space-y-6 bg-yellow-100">
            <div className="grid grid-cols-2">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Verify Pet
              </h3>
              <button
                className="ml-56 text-xl"
                onClick={() => setOpenModal(undefined)}
              >
                X
              </button>
            </div>
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>Pet ID.</Table.HeadCell>
                <Table.HeadCell>Pet Name.</Table.HeadCell>
                <Table.HeadCell>User Name.</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {app.length != 0 ? (
                  app.map((item, i) => (
                    <Table.Row
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      key={i}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {item.Appdate.split("T")[0]}
                      </Table.Cell>
                      <Table.Cell>{item.Vet_name}</Table.Cell>
                      <Table.Cell>{item.Tre_name}</Table.Cell>
                      <Table.Cell>
                        <Button color="success" pill>
                          <p>Success</p>
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
            <div className="w-full">
              <Button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Register
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modal_VeriPet;
