import React, { useState } from 'react'
import { Search, Eye, FileText, RotateCcw } from 'lucide-react'

const ListofUsers = () => {
  const [searchFilters, setSearchFilters] = useState({
    passYear: '',
    nameOfApplicant: '',
    department: '',
    applicantMobileNo: '',
    railwayNo: '',
    applicantType: '',
    vehicleNumber: '',
    vehicleType: ''
  });

  // Sample data based on the screenshot
  const [userData] = useState([
    {
      sNo: 1,
      passYear: 2021,
      applicationNo: 3,
      applicationDate: '28/04/2021',
      nameOfApplicant: 'S.K.SWAMI',
      designation: 'JPE',
      department: 'SECURITY',
      applicantMobileNo: '9002125492',
      railwayNo: '25988',
      applicantType: 'NON-GAZETTED',
      vehicleNumber: 'RJ01CD2841',
      vehicleType: 'FOUR WHEELER',
      vehicleDescription: 'WHITE FORD ASPIRE',
      passNo: 1,
      actions: ['Print Pass', 'View History', 'View Docs', 'Generate Pass Again']
    },
    {
      sNo: 2,
      passYear: 2021,
      applicationNo: 2,
      applicationDate: '27/04/2021',
      nameOfApplicant: 'ANIL SINGH',
      designation: 'SR. CLERK',
      department: 'STORES',
      applicantMobileNo: '7014579252',
      railwayNo: '25929',
      applicantType: 'NON-GAZETTED',
      vehicleNumber: 'RJ18CH3426',
      vehicleType: 'FOUR WHEELER',
      vehicleDescription: 'WHITE MARUTI SUZUKI DZIRE',
      passNo: 2,
      actions: ['Print Pass', 'View History', 'View Docs', 'Generate Pass Again']
    },
    {
      sNo: 3,
      passYear: 2021,
      applicationNo: 10,
      applicationDate: '29/04/2021',
      nameOfApplicant: 'DEVI SINGH MEENA',
      designation: 'ASI',
      department: 'SECURITY',
      applicantMobileNo: '9828765914',
      railwayNo: '27987',
      applicantType: 'NON-GAZETTED',
      vehicleNumber: 'RJ29SU3185',
      vehicleType: 'TWO WHEELER',
      vehicleDescription: 'BLACK RED TVS STAR CITY',
      passNo: 1,
      actions: ['Print Pass', 'View History', 'View Docs', 'Generate Pass Again']
    },
    {
      sNo: 4,
      passYear: 2021,
      applicationNo: 5,
      applicationDate: '28/04/2021',
      nameOfApplicant: 'NARENDER SINGH TANWAR',
      designation: 'CONSTABLE',
      department: 'SECURITY',
      applicantMobileNo: '8005668327',
      railwayNo: '25987',
      applicantType: 'NON-GAZETTED',
      vehicleNumber: 'RJ14YB6491',
      vehicleType: 'TWO WHEELER',
      vehicleDescription: 'BLACK SPLENDOR',
      passNo: 2,
      actions: ['Print Pass', 'View History', 'View Docs', 'Generate Pass Again']
    },
    {
      sNo: 5,
      passYear: 2021,
      applicationNo: 13,
      applicationDate: '03/05/2021',
      nameOfApplicant: 'NOOR MOHAMMAD KHAN',
      designation: 'SI',
      department: 'SECURITY',
      applicantMobileNo: '8005736391',
      railwayNo: '27987',
      applicantType: 'NON-GAZETTED',
      vehicleNumber: 'RJ02BF7299',
      vehicleType: 'TWO WHEELER',
      vehicleDescription: 'BLACK ROYAL ENFIELD',
      passNo: 3,
      actions: ['Print Pass', 'View History', 'View Docs', 'Generate Pass Again']
    },
    {
      sNo: 6,
      passYear: 2021,
      applicationNo: 19,
      applicationDate: '07/05/2021',
      nameOfApplicant: 'BANWAL RAM MEENA',
      designation: 'CONSTABLE',
      department: 'SECURITY',
      applicantMobileNo: '9001536759',
      railwayNo: '',
      applicantType: 'NON-GAZETTED',
      vehicleNumber: 'RJ45CEB284',
      vehicleType: 'FOUR WHEELER',
      vehicleDescription: 'WHITE 2018',
      passNo: 3,
      actions: ['Print Pass', 'View History', 'View Docs', 'Generate Pass Again']
    },
    {
      sNo: 7,
      passYear: 2021,
      applicationNo: 24,
      applicationDate: '07/05/2021',
      nameOfApplicant: 'RAMSWROOP MEENA',
      designation: 'TEC.II',
      department: 'ELECTRICAL',
      applicantMobileNo: '9026812303',
      railwayNo: '',
      applicantType: 'NON-GAZETTED',
      vehicleNumber: 'RJ45CK1056',
      vehicleType: 'FOUR WHEELER',
      vehicleDescription: 'BLUE 2020',
      passNo: 3,
      actions: ['Print Pass', 'View History', 'View Docs', 'Generate Pass Again']
    }
  ]);

  const handleFilterChange = (e) => {
    setSearchFilters({ ...searchFilters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    console.log('Searching with filters:', searchFilters);
    // Add search logic here
  };

  const handleAction = (action, user) => {
    console.log(`${action} for user:`, user);
    // Add action logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="bg-blue-600 text-white py-4 px-6 rounded-t-lg">
            <h1 className="text-2xl font-bold">Search Filters</h1>
          </div>
          
          {/* Search Filters */}
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Pass Year</label>
                <select
                  name="passYear"
                  value={searchFilters.passYear}
                  onChange={handleFilterChange}
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">--select--</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Name of Applicant</label>
                <input
                  type="text"
                  name="nameOfApplicant"
                  value={searchFilters.nameOfApplicant}
                  onChange={handleFilterChange}
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Department</label>
                <select
                  name="department"
                  value={searchFilters.department}
                  onChange={handleFilterChange}
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">--select--</option>
                  <option value="SECURITY">SECURITY</option>
                  <option value="STORES">STORES</option>
                  <option value="ELECTRICAL">ELECTRICAL</option>
                  <option value="ENGINEERING">ENGINEERING</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Applicant Mobile No.</label>
                <input
                  type="text"
                  name="applicantMobileNo"
                  value={searchFilters.applicantMobileNo}
                  onChange={handleFilterChange}
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Railway No.</label>
                <input
                  type="text"
                  name="railwayNo"
                  value={searchFilters.railwayNo}
                  onChange={handleFilterChange}
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Applicant Type</label>
                <select
                  name="applicantType"
                  value={searchFilters.applicantType}
                  onChange={handleFilterChange}
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">--select--</option>
                  <option value="NON-GAZETTED">NON-GAZETTED</option>
                  <option value="GAZETTED">GAZETTED</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Vehicle Number</label>
                <input
                  type="text"
                  name="vehicleNumber"
                  value={searchFilters.vehicleNumber}
                  onChange={handleFilterChange}
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                <select
                  name="vehicleType"
                  value={searchFilters.vehicleType}
                  onChange={handleFilterChange}
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">--select--</option>
                  <option value="TWO WHEELER">TWO WHEELER</option>
                  <option value="FOUR WHEELER">FOUR WHEELER</option>
                </select>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded font-medium transition-colors duration-200 shadow-md hover:shadow-lg flex items-center mx-auto"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white py-3 px-6">
            <h2 className="text-lg font-bold">List of APPROVED/Issued Vehicle Pass Applications</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-2 py-2 text-left font-medium text-gray-700 border">S.No.</th>
                  <th className="px-2 py-2 text-left font-medium text-gray-700 border">Pass Year</th>
                  <th className="px-2 py-2 text-left font-medium text-gray-700 border">Application No.</th>
                  <th className="px-2 py-2 text-left font-medium text-gray-700 border">Application Date</th>
                  <th className="px-2 py-2 text-left font-medium text-gray-700 border">Name of Applicant</th>
                  <th className="px-2 py-2 text-left font-medium text-gray-700 border">Designation</th>
                  <th className="px-2 py-2 text-left font-medium text-gray-700 border">Department</th>
                  <th className="px-2 py-2 text-left font-medium text-gray-700 border">Applicant Mobile No.</th>
                  <th className="px-2 py-2 text-left font-medium text-gray-700 border">Railway No.</th>
                  <th className="px-2 py-2 text-left font-medium text-gray-700 border">Applicant Type</th>
                  <th className="px-2 py-2 text-left font-medium text-gray-700 border">Vehicle Number</th>
                  <th className="px-2 py-2 text-left font-medium text-gray-700 border">Vehicle Type</th>
                  <th className="px-2 py-2 text-left font-medium text-gray-700 border">Vehicle Description</th>
                  <th className="px-2 py-2 text-left font-medium text-gray-700 border">Pass No.</th>
                  <th className="px-2 py-2 text-left font-medium text-gray-700 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-2 py-2 border text-center">{user.sNo}</td>
                    <td className="px-2 py-2 border text-center">{user.passYear}</td>
                    <td className="px-2 py-2 border text-center">{user.applicationNo}</td>
                    <td className="px-2 py-2 border text-center">{user.applicationDate}</td>
                    <td className="px-2 py-2 border">{user.nameOfApplicant}</td>
                    <td className="px-2 py-2 border text-center">{user.designation}</td>
                    <td className="px-2 py-2 border text-center">{user.department}</td>
                    <td className="px-2 py-2 border text-center">{user.applicantMobileNo}</td>
                    <td className="px-2 py-2 border text-center">{user.railwayNo}</td>
                    <td className="px-2 py-2 border text-center">{user.applicantType}</td>
                    <td className="px-2 py-2 border text-center">{user.vehicleNumber}</td>
                    <td className="px-2 py-2 border text-center">{user.vehicleType}</td>
                    <td className="px-2 py-2 border">{user.vehicleDescription}</td>
                    <td className="px-2 py-2 border text-center">{user.passNo}</td>
                    <td className="px-2 py-2 border">
                      <div className="flex flex-col space-y-1">
                        <button
                          onClick={() => handleAction('Print Pass', user)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs transition-colors"
                        >
                          Print Pass
                        </button>
                        <button
                          onClick={() => handleAction('View History', user)}
                          className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs transition-colors"
                        >
                          View History
                        </button>
                        <button
                          onClick={() => handleAction('View Docs', user)}
                          className="bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 rounded text-xs transition-colors"
                        >
                          View Docs
                        </button>
                        <button
                          onClick={() => handleAction('Generate Pass Again', user)}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded text-xs transition-colors"
                        >
                          Generate Pass Again
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListofUsers