import React, { useState } from 'react'

const Addnewuser = () => {
  const [formData, setFormData] = useState({
    userId: '',
    userName: '',
    designation: '',
    railway: '',
    unitDivision: '',
    office: '',
    department: '',
    phoneNo: '',
    emailId: '',
    status: 'Active',
    userType: 'User (for Document Verification only)',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User added:', formData);
    // Add API call here
  };

  const handleCancel = () => {
    setFormData({
      userId: '',
      userName: '',
      designation: '',
      railway: '',
      unitDivision: '',
      office: '',
      department: '',
      phoneNo: '',
      emailId: '',
      status: 'Active',
      userType: 'User (for Document Verification only)',
      password: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white py-4 px-6">
          <h2 className="text-xl font-bold text-center">Add New User Account</h2>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* User ID */}
            <div className="flex items-center">
              <label className="w-32 text-sm font-medium text-gray-700 bg-blue-100 px-3 py-2 border border-gray-300">
                User ID
              </label>
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* User Name */}
            <div className="flex items-center">
              <label className="w-32 text-sm font-medium text-gray-700 bg-blue-100 px-3 py-2 border border-gray-300">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Designation */}
            <div className="flex items-center">
              <label className="w-32 text-sm font-medium text-gray-700 bg-blue-100 px-3 py-2 border border-gray-300">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Designation of User"
                className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Railway */}
            <div className="flex items-center">
              <label className="w-32 text-sm font-medium text-gray-700 bg-blue-100 px-3 py-2 border border-gray-300">
                Railway
              </label>
              <select
                name="railway"
                value={formData.railway}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">--Select Railway--</option>
                <option value="Northern Western Railway">Northern Western Railway</option>
                <option value="Central Railway">Central Railway</option>
                <option value="Eastern Railway">Eastern Railway</option>
                <option value="Southern Railway">Southern Railway</option>
              </select>
            </div>

            {/* Unit/Division */}
            <div className="flex items-center">
              <label className="w-32 text-sm font-medium text-gray-700 bg-blue-100 px-3 py-2 border border-gray-300">
                Unit/Division
              </label>
              <select
                name="unitDivision"
                value={formData.unitDivision}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">--Select Unit/Division--</option>
                <option value="Mumbai Division">Mumbai Division</option>
                <option value="Delhi Division">Delhi Division</option>
                <option value="Pune Division">Pune Division</option>
                <option value="Headquarters">Headquarters</option>
              </select>
            </div>

            {/* Office */}
            <div className="flex items-center">
              <label className="w-32 text-sm font-medium text-gray-700 bg-blue-100 px-3 py-2 border border-gray-300">
                Office
              </label>
              <select
                name="office"
                value={formData.office}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">--Select Office--</option>
                <option value="Administrative Office">Administrative Office</option>
                <option value="Operations Office">Operations Office</option>
                <option value="Maintenance Office">Maintenance Office</option>
                <option value="Security Office">Security Office</option>
              </select>
            </div>

            {/* Department */}
            <div className="flex items-center">
              <label className="w-32 text-sm font-medium text-gray-700 bg-blue-100 px-3 py-2 border border-gray-300">
                Department
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">--Select Department--</option>
                <option value="Engineering">Engineering</option>
                <option value="Operations">Operations</option>
                <option value="Commercial">Commercial</option>
                <option value="Electrical">Electrical</option>
                <option value="Signal & Telecom">Signal & Telecom</option>
                <option value="Personnel">Personnel</option>
                <option value="Accounts">Accounts</option>
                <option value="Medical">Medical</option>
                <option value="Security">Security</option>
              </select>
            </div>

            {/* Phone No */}
            <div className="flex items-center">
              <label className="w-32 text-sm font-medium text-gray-700 bg-blue-100 px-3 py-2 border border-gray-300">
                Phone No.
              </label>
              <input
                type="tel"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email ID */}
            <div className="flex items-center">
              <label className="w-32 text-sm font-medium text-gray-700 bg-blue-100 px-3 py-2 border border-gray-300">
                Email ID
              </label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Status */}
            <div className="flex items-center">
              <label className="w-32 text-sm font-medium text-gray-700 bg-blue-100 px-3 py-2 border border-gray-300">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>

            {/* User Type */}
            <div className="flex items-center">
              <label className="w-32 text-sm font-medium text-gray-700 bg-blue-100 px-3 py-2 border border-gray-300">
                User Type
              </label>
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="User (for Document Verification only)">User (for Document Verification only)</option>
                <option value="Admin">Admin</option>
                <option value="Super Admin">Super Admin</option>
                <option value="Operator">Operator</option>
              </select>
            </div>

            {/* Password */}
            <div className="flex items-center">
              <label className="w-32 text-sm font-medium text-gray-700 bg-blue-100 px-3 py-2 border border-gray-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                minLength="6"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 pt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Add User
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-2 rounded font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Addnewuser