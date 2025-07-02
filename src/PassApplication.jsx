import React from 'react'
import { Link } from 'react-router-dom'
import { Search, FileText, CheckCircle, Copy, HelpCircle } from 'lucide-react'

const PassApplication = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8 px-10">
          <h1 className="text-4xl font-bold tracking-wide">Vehicle Parking Pass</h1>
          <p className="text-blue-100 mt-3 text-lg">Manage your railway parking permits efficiently and securely</p>
        </div>
        
        <div className="p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <button className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-8 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2">
              <Copy className="w-10 h-10 mb-4" />
              <span className="text-lg">Duplicate Pass</span>
            </button>
            <Link 
              to="/pass-applications/application-form" 
              className="flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-8 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2"
            >
              <FileText className="w-10 h-10 mb-4" />
              <span className="text-lg">Apply for Vehicle-Pass</span>
            </Link>
            <button className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white p-8 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2">
              <CheckCircle className="w-10 h-10 mb-4" />
              <span className="text-lg">Check Application Status</span>
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-2xl border border-blue-100 shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-8 flex items-center">
              <Search className="mr-3 w-6 h-6" />
              Search Pass Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-3 text-lg">Application No.</label>
                <input 
                  type="text" 
                  placeholder="Enter Application Number" 
                  className="border border-gray-300 rounded-lg p-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-lg" 
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-3 text-lg">Vehicle No.</label>
                <input 
                  type="text" 
                  placeholder="Enter Vehicle Number" 
                  className="border border-gray-300 rounded-lg p-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-lg" 
                />
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center mx-auto text-lg">
                <Search className="mr-2 w-6 h-6" />
                Search Records
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center flex items-center justify-center text-gray-600 text-base">
            <HelpCircle className="w-5 h-5 mr-2 text-blue-500" />
            For assistance with pass applications, please contact the railway helpdesk
          </div>
        </div>
      </div>
    </div>
  )
}

export default PassApplication