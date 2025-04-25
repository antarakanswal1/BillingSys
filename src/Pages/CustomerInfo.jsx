import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEllipsisV,
  faFileInvoice,
  faPlus,
  faSearch,
//   faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "lucide-react";

const customers = [
  {
    name: "Rishu Rawat",
    email: "rr889985@gmail.com",
    phone: "7895613233",
    address: "KhandGaon, Rishikesh",
  },
  {
    name: "Robert Fox",
    email: "rr889985@gmail.com",
    phone: "7895613233",
    address: "KhandGaon, Rishikesh",
  },
  {
    name: "Jane Cooper",
    email: "rr889985@gmail.com",
    phone: "7895613233",
    address: "KhandGaon, Rishikesh",
  },
  {
    name: "Wade Warren",
    email: "rr889985@gmail.com",
    phone: "7895613233",
    address: "KhandGaon, Rishikesh",
  },
  {
    name: "Esther Howard",
    email: "rr889985@gmail.com",
    phone: "7895613233",
    address: "KhandGaon, Rishikesh",
  },
];

export default function CustomerPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 bg-white p-8 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Customers</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Customer
          </button>
        </div>

        <div className="mb-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="search customer by name, email"
              className="w-full border border-gray-300 rounded pl-10 pr-4 py-2"
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
              Customers Detail ({customers.length})
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
              {customers.map((customer, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
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
