import { StyleSheet, Text, View } from "react-native";
import { Button, Checkbox, Label, Modal, TextInput, Table } from 'flowbite-react';
import React from "react";
import { useState } from "react";
import Image_2 from "./img/record_butt.png"

const Modal_Vacc = () => {
  const [openModal, setOpenModal] = useState("");
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
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>
                  Vaccine Name
                </Table.HeadCell>
                <Table.HeadCell>
                  Symptom
                </Table.HeadCell>
                <Table.HeadCell>
                  Vet.
                </Table.HeadCell>
                <Table.HeadCell>
                  Date
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </Table.Cell>
                  <Table.Cell>
                    Sliver
                  </Table.Cell>
                  <Table.Cell>
                    Laptop
                  </Table.Cell>
                  <Table.Cell>
                    $2999
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <p>
                      Microsoft Surface Pro
                    </p>
                  </Table.Cell>
                  <Table.Cell>
                    White
                  </Table.Cell>
                  <Table.Cell>
                    Laptop PC
                  </Table.Cell>
                  <Table.Cell>
                    $1999
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Magic Mouse 2
                  </Table.Cell>
                  <Table.Cell>
                    Black
                  </Table.Cell>
                  <Table.Cell>
                    Accessories
                  </Table.Cell>
                  <Table.Cell>
                    $99
                  </Table.Cell>
                </Table.Row>
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

export default Modal_Vacc;
