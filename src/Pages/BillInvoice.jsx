// Invoice.jsx
import React from "react";
import Sidebar2 from "../Components/Sidebar2";

const BillInvoice = () => {
  const products = [
    { name: "Collared Shirt", price: 4799, qty: 2, discount: "8.24%", total: 9089 },
    { name: "Madras Shirt", price: 899, qty: 2, discount: "8.14%", total: 1500 },
    { name: "Sportswear", price: 599, qty: 1, discount: "3.33%", total: 579 },
    { name: "H&M T-shirt", price: 2999, qty: 1, discount: "2.01%", total: 2869 },
  ];

  return (
    <section className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar2 />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
          {/* Top Section */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Bill</h1>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Print</button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Download</button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Share</button>
            </div>
          </div>

          {/* Invoice Section */}
          <div className="border p-5 rounded">
            <h2 className="text-xl font-semibold text-center mb-6">Invoice</h2>

            {/* Billing Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 text-sm md:text-lg mb-6">
              <div>
                <p><strong>Bill From:</strong> Inventor Pvt Limited</p>
                <p>Ballupur, Dehradun - 248001</p>
                <p className="mt-4"><strong>Bill To:</strong> Rishubh Rawat</p>
                <p>Rishikesh, Uttarakhand - 249201</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p><strong>Invoice Details:</strong></p>
                <p>Date: 4/12/2025</p>
                <p>Payment Method: <span className="capitalize">cash</span></p>
              </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-lg text-left border-t border-b">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-2">Product Name</th>
                    <th className="p-2">Price</th>
                    <th className="p-2">Qty</th>
                    <th className="p-2">Discount</th>
                    <th className="p-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="p-2">{item.name}</td>
                      <td className="p-2">₹{item.price}</td>
                      <td className="p-2">{item.qty}</td>
                      <td className="p-2">{item.discount}</td>
                      <td className="p-2">₹{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals Section */}
            <div className="text-right mt-6 space-y-1 text-sm md:text-lg">
              <p><span className="font-semibold">Subtotal:</span> ₹15,087</p>
              <p><span className="font-semibold">Tax (18%):</span> ₹676</p>
              <p className="text-lg font-bold mt-2">Grand Total: ₹15,963</p>
            </div>

            {/* Payment Details */}
            <div className="mt-8 space-y-1 text-sm md:text-lg">
              <p><span className="font-semibold">In Words:</span> Fifteen thousand Nine Hundred & Sixty Three</p>
              <p><span className="font-semibold">Amount Paid:</span> ₹15,963</p>
            </div>

            {/* Thank You Note */}
            <p className="text-center mt-8 text-blue-600 font-semibold">
              Thank you for your Purchase!!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillInvoice;
