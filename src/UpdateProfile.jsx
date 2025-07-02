import React, { useState } from 'react'

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    userId: 'UB1',
    userName: 'AAA',
    phoneNo: '9001201201',
    designation: 'HEMMASTAR',
    railway: 'Northern Western Railway',
    unitDivision: 'Mumbai Division',
    office: 'Administrative Office',
    department: 'ACCOUNTS',
    emailId: 'HAMMAL',
    status: 'A',
    userType: '1'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
    // Add API call here
  };

  const handleCancel = () => {
    // Reset to original values or navigate back
    console.log('Update cancelled');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white py-4 px-6">
          <h2 className="text-xl font-bold text-center">User Profile</h2>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
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
                className="flex-1 px-3 py-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                readOnly
              />
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
                <option value="Western Railway">Western Railway</option>
                <option value="Northern Railway">Northern Railway</option>
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
                <option value="Ahmedabad Division">Ahmedabad Division</option>
                <option value="Vadodara Division">Vadodara Division</option>
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
                <option value="Commercial Office">Commercial Office</option>
                <option value="Engineering Office">Engineering Office</option>
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
                <option value="ACCOUNTS">ACCOUNTS</option>
                <option value="ENGINEERING">ENGINEERING</option>
                <option value="OPERATIONS">OPERATIONS</option>
                <option value="COMMERCIAL">COMMERCIAL</option>
                <option value="ELECTRICAL">ELECTRICAL</option>
                <option value="SIGNAL & TELECOM">SIGNAL & TELECOM</option>
                <option value="PERSONNEL">PERSONNEL</option>
                <option value="MEDICAL">MEDICAL</option>
                <option value="SECURITY">SECURITY</option>
                <option value="STORES">STORES</option>
              </select>
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
                <option value="A">A - Active</option>
                <option value="I">I - Inactive</option>
                <option value="S">S - Suspended</option>
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
                <option value="1">1 - User (Document Verification)</option>
                <option value="2">2 - Admin</option>
                <option value="3">3 - Super Admin</option>
                <option value="4">4 - Operator</option>
                <option value="5">5 - Manager</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 pt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Update Profile
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

          {/* Additional Information */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-sm font-semibold text-blue-800 mb-2">Profile Information:</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• User ID cannot be changed once created</li>
              <li>• All fields marked as required must be filled</li>
              <li>• Changes will be effective immediately after update</li>
              <li>• Contact administrator for role or status changes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateProfile