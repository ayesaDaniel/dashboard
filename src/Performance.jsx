import { FaUserCircle } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";  
import { Link } from "react-router-dom";

export default function PerformanceSection(){

    <div className="bg-white p-4 rounded-2xl shadow-lg">
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
}