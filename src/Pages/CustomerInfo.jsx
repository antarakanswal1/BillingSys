import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddCustomerModal from "./AddCustomerModal";
import {
  faTrash,
  faEllipsisV,
  faFileInvoice,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Components/Sidebar";

// Dummy customers
const customersList = [
  {
    name: "Rishu Rawat",
    email: "rr889985@gmail.com",
    phone: "7895613233",
    address: "KhandGaon, Rishikesh",
  },
  {
    name: "Robert Fox",
    email: "robert@example.com",
    phone: "7895613233",
    address: "KhandGaon, Rishikesh",
  },
  {
    name: "Jane Cooper",
    email: "jane@example.com",
    phone: "7895613233",
    address: "KhandGaon, Rishikesh",
  },
  {
    name: "Wade Warren",
    email: "wade@example.com",
    phone: "7895613233",
    address: "KhandGaon, Rishikesh",
  },
  {
    name: "Esther Howard",
    email: "esther@example.com",
    phone: "7895613233",
    address: "KhandGaon, Rishikesh",
  },
];

export default function CustomerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customersList.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      {/* Sidebar Placeholder */}
      {/* Replace with your actual Sidebar component if available */}
      <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 bg-white p-8 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Customers</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Customer
          </button>

          {isModalOpen && (
            <AddCustomerModal onClose={() => setIsModalOpen(false)} />
          )}
        </div>

        <div className="mb-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search customer by name, email"
              className="w-full border border-gray-300 rounded pl-10 pr-4 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-3 text-gray-400"
            />
          </div>
        </div>

        <div className="border rounded p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              Customers Detail ({filteredCustomers.length})
            </h2>
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faTrash} className="cursor-pointer" />
              <FontAwesomeIcon icon={faEllipsisV} className="cursor-pointer" />
            </div>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Phone</th>
                <th className="py-2">Address</th>
                <th className="py-2">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.email} className="border-b hover:bg-gray-50">
                  <td className="py-2">{customer.name}</td>
                  <td className="py-2">{customer.email}</td>
                  <td className="py-2">{customer.phone}</td>
                  <td className="py-2">{customer.address}</td>
                  <td className="py-2">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faFileInvoice} />
                      <input type="checkbox" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
