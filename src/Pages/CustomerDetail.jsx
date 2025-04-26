import React from 'react';

const CustomerDetail = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="w-full border border-black h-20 bg-[#0F2657] flex flex-col sm:flex-row justify-end items-center px-4 gap-2">
        <a href="/dashboard"><button className="px-4 py-2 rounded border border-white text-white" >Go Back</button></a>
        <button className="bg-white text-black px-4 py-2 rounded">Save & Next</button>
      </div>

      {/* Form Container */}
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-4 sm:p-6 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            {/* Logo and Company Name */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
              <div className="flex flex-col items-center">
                <div className="text-4xl">👚</div>
                <button className="text-red-600 text-sm mt-2 hover:underline">Remove Logo</button>
              </div>

              <div className="w-full sm:w-2/3">
                <label htmlFor="companyName" className="text-sm font-medium text-gray-700 mb-1 block">
                  Company Name<span className="text-red-500">*</span>
                </label>
                <input
                  id="companyName"
                  type="text"
                  placeholder="Unknown"
                  className="w-full border rounded-md px-3 py-2 text-sm text-gray-500"
                />
              </div>
            </div>

            {/* Form Inputs */}
            {[
              { label: 'Company Phone No.*', type: 'text', placeholder: 'Company Phone No.' },
              { label: 'Company Email*', type: 'email', placeholder: 'Company Email' },
              { label: 'Billing Address*', type: 'text', placeholder: '7529 E. Pecan St.' },
              { label: 'GSTIN*', type: 'text', placeholder: 'RTOF88FJFHKFHSKIF' },
              { label: 'PAN Number*', type: 'text', placeholder: 'RTOF88FJFHKFHSKIF' },
            ].map((input, index) => (
              <div className="mb-4" key={index}>
                <label className="block font-semibold mb-1">{input.label}</label>
                <input
                  type={input.type}
                  className="w-full border px-3 py-2 rounded"
                  placeholder={input.placeholder}
                />
              </div>
            ))}

            {/* Password */}
            <div className="mb-2">
              <label className="block font-semibold mb-1">Password*</label>
              <input type="password" className="w-full border px-3 py-2 rounded" />
              <p className="text-red-500 text-sm">Note: password should be 8 to 15 characters.....</p>
            </div>

            {/* Address Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block font-semibold mb-1">State*</label>
                <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Uttarakhand" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Pincode*</label>
                <input type="text" className="w-full border px-3 py-2 rounded" placeholder="249201" />
              </div>
              <div>
                <label className="block font-semibold mb-1">City*</label>
                <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Rishikesh" />
              </div>
            </div>

            {/* GST Registered */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">Are You GST Registered?*</label>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Yes</button>
                <button className="bg-gray-200 px-4 py-2 rounded">No</button>
              </div>
            </div>

            {/* e-Invoice Toggle */}
            <div className="flex items-center gap-2">
              <label className="block font-semibold">Enable e-Invoice</label>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            </div>
          </div>

          {/* Right Column */}
          <div>
            {[
              { label: 'Business Type*', placeholder: 'Finance etc...' },
              { label: 'Industrial Type*', placeholder: 'Finance etc...' },
              { label: 'Business Registration Type', placeholder: 'Finance etc...' },
            ].map((input, index) => (
              <div className="mb-4" key={index}>
                <label className="block font-semibold mb-1">{input.label}</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded"
                  placeholder={input.placeholder}
                />
              </div>
            ))}

            {/* Terms */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Terms & Conditions</label>
              <textarea
                className="w-full border px-3 py-2 rounded"
                placeholder="terms and conditions"
              />
            </div>

            {/* Signature Upload */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Signature*</label>
              <div className="border-dashed border-2 border-gray-300 rounded p-4 flex flex-col items-center justify-center h-32">
                <input type="file" className="mb-2" accept="image/jpeg,image/jpg,image/png" />
                <small className="text-gray-500">(Supported logo extensions: .jpeg, .jpg, .png only)</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
