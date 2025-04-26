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
      <div className="flex-1 overflow-auto bg-gray-100 p-4 md:p-8 flex items-center justify-center">
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-md w-full max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Side */}
              <div className="flex flex-col gap-4">
                {/* Logo and Remove */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    <span className="text-gray-400 text-sm">Logo</span>
                  </div>
                  <button className="text-red-500 text-sm font-semibold">Remove Logo</button>
                </div>

                {/* Inputs */}
                <input type="text" placeholder="Company Name*" className="w-full border border-gray-300 rounded-xl p-3 text-sm" />
                
                <div className="flex flex-col md:flex-row gap-4">
                  <input type="text" placeholder="Company Phone No." className="w-full border border-gray-300 rounded-xl p-3 text-sm" />
                  <input type="email" placeholder="Company Email*" className="w-full border border-gray-300 rounded-xl p-3 text-sm" />
                </div>

                <input type="password" placeholder="Password*" className="w-full border border-gray-300 rounded-xl p-3 text-sm" />
                <input type="text" placeholder="Billing Address*" className="w-full border border-gray-300 rounded-xl p-3 text-sm" />

                <div className="flex flex-col md:flex-row gap-4">
                  <input type="text" placeholder="State*" className="w-full border border-gray-300 rounded-xl p-3 text-sm" />
                  <input type="text" placeholder="Pincode*" className="w-full border border-gray-300 rounded-xl p-3 text-sm" />
                </div>

                <input type="text" placeholder="City*" className="w-full border border-gray-300 rounded-xl p-3 text-sm" />

                {/* GST Registered */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Are You GST Registered?*</label>
                  <div className="flex space-x-4">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm">Yes</button>
                    <button className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 text-sm hover:bg-gray-200">No</button>
                  </div>
                </div>

                <input type="text" placeholder="GSTIN*" className="w-full border border-gray-300 rounded-xl p-3 text-sm" />
                <input type="text" placeholder="PAN Number*" className="w-full border border-gray-300 rounded-xl p-3 text-sm" />

                {/* e-Invoice */}
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-semibold text-gray-700">Enable e-Invoice</span>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 relative transition">
                      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col gap-4">
                <input type="text" placeholder="Business Type*" className="w-full border border-gray-300 rounded-xl p-3 text-sm" />
                <input type="text" placeholder="Industrial Type*" className="w-full border border-gray-300 rounded-xl p-3 text-sm" />
                <input type="text" placeholder="Business Registration Type" className="w-full border border-gray-300 rounded-xl p-3 text-sm" />
                <textarea placeholder="Terms & Conditions" rows="5" className="w-full border border-gray-300 rounded-xl p-3 text-sm resize-none"></textarea>

                {/* Signature Upload */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Signature*</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-gray-400">
                    <input type="file" accept="image/*" id="signature" className="hidden" />
                    <label htmlFor="signature" className="cursor-pointer text-blue-600 font-semibold">Browse...</label>
                    <p className="text-xs mt-2">(supported logo extensions .jpeg/.jpg/.png Only)</p>
                  </div>
                </div>

                {/* Update Button */}
              
              </div>

            </div>
          </div>
        </div>
    </div>
  );
};

export default CustomerDetail;
