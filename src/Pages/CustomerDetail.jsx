import React from 'react'

const CustomerDetail = () => {
  return (
    <>
     <div className="min-h-screen bg-gray-100 p-4">
     <div style={{width:"100%",border:"1px solid black",height:"70px",backgroundColor:"#0F2657" }} >
          <button className="mt-3 px-4 py-2 rounded border border-white text-white" style={{marginLeft:"70%"}}>Go Back</button>
          <button className="bg-white text-black px-4 py-2 rounded ml-2">Save & Next</button>
        </div>
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6" >
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Company Name*</label>
              <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Unknown" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Company Phone No.*</label>
              <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Company Phone No." />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Company Email*</label>
              <input type="email" className="w-full border px-3 py-2 rounded" placeholder="Company Email" />
            </div>
            <div className="mb-2">
              <label className="block font-semibold mb-1">Password*</label>
              <input type="password" className="w-full border px-3 py-2 rounded" />
              <p className="text-red-500 text-sm">Note: password should be 8 to 15 characters.....</p>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Billing Address*</label>
              <input type="text" className="w-full border px-3 py-2 rounded" placeholder="7529 E. Pecan St." />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
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
            <div className="mb-4">
              <label className="block font-semibold mb-2">Are You GST Registered?*</label>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Yes</button>
                <button className="bg-gray-200 px-4 py-2 rounded">No</button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">GSTIN*</label>
              <input type="text" className="w-full border px-3 py-2 rounded" placeholder="RTOF88FJFHKFHSKIF" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">PAN Number*</label>
              <input type="text" className="w-full border px-3 py-2 rounded" placeholder="RTOF88FJFHKFHSKIF" />
            </div>
            <div className="flex items-center gap-2">
              <label className="block font-semibold">Enable e-Invoice</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Business Type*</label>
              <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Finance etc..." />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Industrial Type*</label>
              <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Finance etc..." />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Business Registration Type</label>
              <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Finance etc..." />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Terms & Conditions</label>
              <textarea className="w-full border px-3 py-2 rounded" placeholder="terms and conditions" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Signature*</label>
              <div className="border-dashed border-2 border-gray-300 rounded p-4 flex flex-col items-center justify-center h-32">
                <input type="file" className="mb-2" accept="image/jpeg,image/jpg,image/png" />
                <small className="text-gray-500">(supported logo Extensions .jpeg, .jpg, .png Only)</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CustomerDetail