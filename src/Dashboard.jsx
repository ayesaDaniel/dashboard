
import React from "react";
import JobFilters from "./DateAndJobFilter";
import { FaUserCircle } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";  // Import the analytics icon
import { Link } from "react-router-dom";
    import { HashLink } from 'react-router-hash-link';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", blue: 25, yellow: 50 },
  { month: "Feb", blue: 80, yellow: 90 },
  { month: "Mar", blue: 60, yellow: 75 },
  { month: "Apr", blue: 70, yellow: 50 },
  { month: "May", blue: 30, yellow: 60 },
  { month: "Jul", blue: 100, yellow: 50 },
  { month: "Sep", blue: 95, yellow: 50 },
  { month: "Dec", blue: 50, yellow: 25 }
];

export default function DashboardOverview() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans text-gray-800 bg-[#004d00]
">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#f5f5f5] text-white flex flex-col py-6 px-4 space-y-4 ">
        <div className="text-center mb-6">
        </div>
        <nav className="space-y-2">
          <button className=" text-[#004d00] border border-[#004d00]  py-2 px-4 rounded font-semibold text-left w-full  hover:bg-[#004d00] hover:text-white">Dashboard</button>
             
      <button className="border border-[#004d00] py-2 px-4 rounded text-left w-full  text-[#004d00]  hover:bg-[#004d00] hover:text-white">Analytic & Report</button>
         
          <div className="text-[#004d00] border border-[#004d00]  rounded text-left px-4 py-2   hover:bg-[#004d00] hover:text-white">
            <div >Account manage...</div>
            <ul className=" text-sm pl-2 space-y-1 mt-2 ">
              <li>Clients</li>
              <li>Artisans</li>
              <li>Professionals</li>
            </ul>
          </div>
          <button className="text-[#004d00] border border-[#004d00]  py-2 px-4 rounded text-left w-full  hover:bg-[#004d00] hover:text-white">Message</button>
         <button className="text-[#004d00] border border-[#004d00]  py-2 px-4 rounded text-left w-full  hover:bg-[#004d00] hover:text-white">Job oversight</button>
        </nav>
        <div className="mt-40 space-y-2 pt-40">
          <button className="text-[#004d00] border border-[#004d00]  py-2 px-4 rounded text-left w-full  hover:bg-[#004d00] hover:text-white">Settings</button>
          <button className="text-[#004d00] border border-[#004d00]  py-2 px-4 rounded text-left w-full  hover:bg-[#004d00] hover:text-white">Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 space-y-6">
        {/* Topbar */}
      <div className="flex flex-col md:flex-row items-center gap-60">
  <input
    type="text"
    placeholder="Search"
    className="w-full md:w-[200px] px-3 py-2 border rounded-md shadow-sm text-sm"
  />
  <select className="w-full md:w-[120px] px-6 py-2 border rounded-md shadow-sm text-sm">
    <option>Sort by</option>
  </select>
</div>

        <h1 className="text-2xl md:text-3xl font-bold text-[#4c5fa5]">Overview</h1>

        {/* Revenue & Performance */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          {/* Revenue Overview */}
          <div className="col-span-1 lg:col-span-2 bg-white p-4 rounded shadow" 
     style={{
       backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
       backgroundSize: '20px 20px', 
       backgroundPosition: '0 0, 10px 10px'
     }}>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold">Revenue Overview</h2>
              <select className="border px-2 py-1 text-sm rounded mt-2 md:mt-0">For every month</select>
            </div>
           <div className="h-64 sm:h-80 md:h-96 lg:h-[450px]">
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="blue" fill="#0000FF" />
      <Bar dataKey="yellow" fill="#FFC107" />
    </BarChart>
  </ResponsiveContainer>
</div>

          </div>

     
     
{/* Performance */}
<div className="bg-white p-4 rounded-2xl shadow-lg" id="Performance">
  <h2 className="text-lg md:text-xl font-bold mb-4">Performance</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">

    <div className="border-l-4 border-blue-500 bg-blue-50 p-3 rounded">
  <p>Total Users</p>
   <strong className="text-xl">   <FaChartLine className="mr-2 text-blue-500" />2K</strong> <small>Users</small>
  <div className="relative pt-1">
    <div className="flex mb-2 items-center justify-between">
      <span className="text-sm">0</span>
      <span className="text-sm">2,000</span>
    </div>
    <div className="flex mb-2 items-center justify-between">
      <div className="w-full bg-gray-300 rounded-full h-2.5">
        <div
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${(1200 / 2000) * 100}%` }}  
        ></div>
      </div>
    </div>
  </div>
</div>

    <div className="border-l-4 border-yellow-500 bg-yellow-50 p-3 rounded-2xl shadow">
      <p>Monthly Subscribers</p>
      <span className="inline-block bg-yellow-200 text-yellow-900 px-2 py-1 rounded-2xl shadow">
          <FaChartLine className="mr-2 text-blue-500" />
        20 subs</span>
     
    </div>
    <div className="border-l-4 border-green-600 bg-green-50 p-3 rounded-2xl shadow">
      <p>Resolved Disputes</p>
   <span className="text-green-600 font-semibold flex items-center">
  <FaChartLine className="mr-2 text-blue-500" />
  25%
</span>

    </div>
    <div className="border-l-4 border-red-600 bg-red-50 p-3 rounded-2xl shadow">
      <p>Unresolved Disputes</p>
      <span className="text-red-600 font-semibold">   <FaChartLine className="mr-2 text-blue-500" />75%</span>
    </div>
    <div className="border-l-4 border-purple-600 bg-purple-50 p-3 rounded-2xl shadow col-span-1 sm:col-span-2">
      <p>User Ratings</p>
      <span className="text-xl">⭐⭐⭐⭐☆</span>
    </div>
  </div>

{/* Unresolved Disputes Table */}
<div className="mt-6 bg-red-50 p-4 rounded-2xl shadow">
  <h3 className="text-lg font-semibold mb-4">Unresolved Disputes Details</h3>
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left">
      <thead>
        <tr className="bg-red-100 text-red-600 rounded-2xl shadow">
          <th className="px-4 py-2">Username</th>
          <th className="px-4 py-2">Issue</th>
          <th className="px-4 py-2">Time Raised</th>
        </tr>
      </thead>
      <tbody>
        {/* Example Data Rows */}
        <tr>
          <td className="px-4 py-2">JohnDoe</td>
          <td className="px-4 py-2">Late payment issue</td>
          <td className="px-4 py-2">2025-05-09 14:23</td>
        </tr>
        <tr>
          <td className="px-4 py-2">JaneSmith</td>
          <td className="px-4 py-2">Account access problem</td>
          <td className="px-4 py-2">2025-05-10 09:10</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Michael33</td>
          <td className="px-4 py-2">Service delay</td>
          <td className="px-4 py-2">2025-05-08 17:45</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

</div>


        </div>

    

     {/* Job Oversight */}
<div className="bg-white p-4 rounded-2xl shadow-lg" >
  <h2 className="text-lg md:text-xl font-bold mb-4 text-[#1f2a56]">Job Oversight</h2>

  {/* Search and Filters */}
  <div className="flex flex-wrap gap-2 mb-6">

     <JobFilters />
  </div>

  {/* Job Cards */}
  <div className="space-y-4">
    {[1, 2].map((job, index) => (
      <div key={index} className="border p-4 rounded-md shadow-sm bg-[#f9f9f9]">
        <div className="flex items-center mb-1">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          <p className="font-medium text-sm text-gray-700">Mack Zuckerberg</p>
        </div>
        <p className="font-semibold text-[#1f2a56]">Install Security Cameras for TechHub</p>
        <p className="text-sm text-gray-500 mb-2">Budget: ₦4000</p>
        <p className="text-sm text-gray-700">
          A growing tech company needs a technician to install 6 CCTV cameras in their office space. The job requires running cables...
        </p>
        <p className="text-sm mt-2 text-[#007000] font-medium cursor-pointer">View More...</p>
        <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
          <p>📍 Lagos, Nigeria</p>
          <div className="flex space-x-2">
            <span>💬</span>
            <span>📨</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Account Management & Task Specialist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Account Management */}
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold">Account Management</h2>
              <a href="#" className="text-green-600 text-sm">View More</a>
            </div>
            <div className="overflow-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Control</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 last:border-none">
  <td className="py-3">#CCCS45</td>
  <td className="flex items-center gap-2 py-3">
    <FaUserCircle className="w-8 h-8 text-[#4c5fa5]" />
    Patrick James
  </td>
  <td className="py-3">
    <span className="bg-red-500 text-white px-2 py-1 rounded">Deactivated</span>
  </td>
  <td className="py-3">
    <button className="bg-green-500 text-white px-2 py-1 rounded">Activate</button>
  </td>
</tr>

<tr className="border-b border-gray-200 last:border-none">
  <td className="py-3">#CCCS46</td>
  <td className="flex items-center gap-2 py-3">
    <FaUserCircle className="w-8 h-8 text-[#4c5fa5]" />
    Jennifer Tracy
  </td>
  <td className="py-3">
    <span className="bg-red-500 text-white px-2 py-1 rounded">Deactivated</span>
  </td>
  <td className="py-3">
    <button className="bg-green-500 text-white px-2 py-1 rounded">Activate</button>
  </td>
</tr>

<tr className="border-b border-gray-200 last:border-none">
  <td className="py-3">#CCCS47</td>
  <td className="flex items-center gap-2 py-3">
    <FaUserCircle className="w-8 h-8 text-[#4c5fa5]" />
    Micheal Flowgrid
  </td>
  <td className="py-3">
    <span className="bg-red-500 text-white px-2 py-1 rounded">Deactivated</span>
  </td>
  <td className="py-3">
    <button className="bg-green-500 text-white px-2 py-1 rounded">Activate</button>
  </td>
</tr>

                </tbody>
              </table>
            </div>
          </div>

          {/* Popular Task Specialist */}
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <h2 className="text-lg md:text-xl font-bold mb-4">Popular Task Specialist</h2>
            <p className="text-sm">Task Completion in Due Date</p>
            <div className="bg-green-500 h-2 rounded w-[80%] my-2"></div>
            <p className="text-sm">Uncompleted task</p>
            <div className="bg-red-500 h-2 rounded w-[20%] my-2"></div>
            <p className="text-sm mt-2">Most rated: ⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </main>
    </div>
  );
}
