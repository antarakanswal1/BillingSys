import React from 'react'
import Sidebar from '../Components/Sidebar'

const Dashboard = () => {
  return (
    <div className="flex">
      {/* slide bar start */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* slide bar end */}

      <div className="flex-1">
        <div className="bg-[#0b1f4e] text-white flex p-2 gap-20 text-sm h-11">
          <span className='ml-90 mt-1'>Welcome back</span>
          <div className="flex gap-20 mt-1">
            <span>21 April 2025</span>
            <span>Monday</span>
          </div>
        </div>

        {/* Dashboard Content start */}
        <div className="p-4 bg-gray-50">
          <div className="flex justify-between mb-4 mt-2">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <div className="flex gap-2 mr-10">
              <button className="px-3 py-1 bg-white border rounded">Export Reports</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded">New Invoice</button>
            </div>
          </div>
          {/* Dashboard Content end*/}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mt-8">
            {/* Total Revenue */}
            <div className="bg-white p-3 rounded-xl shadow w-55 h-30">
              <div className="flex justify-between mb-1">
                <span className="text-gray-600 text-sm">Total Revenue</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <p className="text-lg font-bold">₹14,00,568.79</p>
              <p className="text-xs"><span className="text-green-500">+240.1%</span> from last month</p>
            </div>

            {/* Pending Invoice */}
            <div className="bg-white p-3 rounded-xl shadow w-55 h-30">
              <div className="flex justify-between mb-1">
                <span className="text-gray-600 text-sm">Pending Invoice</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <p className="text-lg font-bold">12</p>
              <p className="text-xs"><span className="text-red-500">-4%</span> from last week</p>
            </div>

            {/* Total Customer */}
            <div className="bg-white p-3 rounded-xl shadow w-55 h-30">
              <div className="flex justify-between mb-1">
                <span className="text-gray-600 text-sm">Total Customer</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <p className="text-lg font-bold">136</p>
              <p className="text-xs"><span className="text-green-500">+16%</span> from last month</p>
            </div>

            {/* Inventory Total */}
            <div className="bg-white p-3 rounded-xl shadow w-55 h-30">
              <div className="flex justify-between mb-1">
                <span className="text-gray-600 text-sm">Inventory Total</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <p className="text-lg font-bold">12</p>
              <p className="text-xs"><span className="text-red-500">-16%</span> from last week</p>
            </div>
          </div>

          {/* Charts and Activities  start*/}
        <div className='flex'>
        <div className='mt-[-10px]'>
        <h3 className="font-medium text-3xl">Revenue Overview</h3>
        <p className="text-xs text-gray-500 gap-1">Revenue Trends over past 6 months</p>
        </div>
        <div className='ml-114 mt-[-10px]'>
        <h3 className="font-medium text-3xl">Recent Activities</h3>
        <p className="text-xs text-gray-500">Latest transactions and actions</p>
        </div>
        </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* Revenue Chart */}
            <div className="bg-white p-3 rounded-xl shadow h-90 w-160">
              <div className="flex justify-between my-2 text-sm">
                <div>
                  <p className="text-xs text-gray-500">My Total Revenue</p>
                  <p className="font-bold text-xl">₹ 2,96,099</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="font-bold text-xl">2025 (Jan- July)</p>
                </div>
              </div>

              {/* Simplified Chart */}
              <div className="h-55 bg-gradient-to-b from-blue-50 to-white relative">
                <div className="absolute bottom-0 left-0 w-full h-20 bg-blue-100/30">
                  <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0,10 5,8 10,12 20,5 30,15 40,8 50,14 60,4 70,12 80,8 90,16 100,6" fill="none" stroke="#3b82f6" strokeWidth="1" />
                  </svg>
                </div>
              </div>

              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white p-3 w-80 rounded-xl shadow ml-40">
              <div className="space-y-10 mt-2">
                {/* Activity 1 */}
                <div className="flex">
                  <div className="bg-blue-100 p-1 rounded mr-2">
                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-xl">Invoice #1043 created</span>
                      <span className="text-xs text-gray-500">Just now</span>
                    </div>
                    <p className="text-xs text-gray-500">Customer: Relangi Selva</p>
                  </div>
                </div>

                {/* Activity 2 */}
                <div className="flex">
                  <div className="bg-blue-100 p-1 rounded mr-2">
                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-xl">Invoice #1023 created</span>
                      <span className="text-xs text-gray-500">3h ago</span>
                    </div>
                    <p className="text-xs text-gray-500">Customer: Suraj Ali Khan</p>
                  </div>
                </div>

                {/* Activity 3 */}
                <div className="flex">
                  <div className="bg-blue-100 p-1 rounded mr-2">
                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-xl">Invoice #1076 created</span>
                      <span className="text-xs text-gray-500">5h ago</span>
                    </div>
                    <p className="text-xs text-gray-500">Customer: XYZ Company</p>
                  </div>
                </div>

                {/* Activity 4 */}
                <div className="flex">
                  <div className="bg-blue-100 p-1 rounded mr-2">
                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-xl">Invoice #1004 created</span>
                      <span className="text-xs text-gray-500">12h ago</span>
                    </div>
                    <p className="text-xs text-gray-500">Customer: Walter White</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard