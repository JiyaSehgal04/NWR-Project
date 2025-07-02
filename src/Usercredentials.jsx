import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const Usercredentials = () => {
  const [formData, setFormData] = useState({
    userId: '',
    designation: '',
    phoneNo: '',
    emailId: '',
    railway: '',
    unitDivision: '',
    office: '',
    department: '',
    status: '',
    userType: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
    // Add API call here
  };

  const handleCancel = () => {
    // Reset form or navigate back
    console.log('Update cancelled');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white py-4 px-6">
          <h2 className="text-xl font-bold text-center">User Credentials</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* User Id */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                User Id
              </label>
              <input 
                type="text" 
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter User Id"
              />
            </div>

            {/* Designation */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Designation
              </label>
              <input 
                type="text" 
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Designation"
              />
            </div>

            {/* Phone No */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Phone No
              </label>
              <input 
                type="tel" 
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Phone Number"
              />
            </div>

            {/* Email ID */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Email ID
              </label>
              <input 
                type="email" 
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Email ID"
              />
            </div>

            {/* Railways */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Railways
              </label>
              <input 
                type="text" 
                name="railway"
                value={formData.railway}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Railway"
              />
            </div>

            {/* Unit/Division */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Unit/Division
              </label>
              <input 
                type="text" 
                name="unitDivision"
                value={formData.unitDivision}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Unit/Division"
              />
            </div>

            {/* Office */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Office
              </label>
              <input 
                type="text" 
                name="office"
                value={formData.office}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Office"
              />
            </div>

            {/* Department */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <input 
                type="text" 
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Department"
              />
            </div>

            {/* Status */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <input 
                type="text" 
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Status"
              />
            </div>

            {/* User Type */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                User Type
              </label>
              <input 
                type="text" 
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter User Type"
              />
            </div>

            {/* Password */}
            <div className="space-y-1 col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Usercredentials