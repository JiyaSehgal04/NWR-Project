import React, { useState } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    railway: "",
    unit: "",
    office: "",
    applicantType: "",
    employeeId: "",
    applicantName: "",
    designation: "",
    department: "",
    mobile: "",
    railwayPhone: "",
    email: "",
    sex: "",
    vehicleType: "",
    regNumber: "",
    rcName: "",
    ownershipType: "",
    expiryDate: "",
    makeModel: "",
    color: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add API call here
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6 mt-8">
      <h2 className="text-xl font-bold text-center text-white bg-blue-600 p-3 rounded-md">
        Application for New Vehicle Pass for Year: 2025
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* Dropdowns */}
        <div>
          <label className="block font-semibold">Railway</label>
          <select name="railway" value={formData.railway} onChange={handleChange} className="w-full border rounded p-2">
            <option>Select Railway</option>
            <option>Northern Western Railway</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Unit/Division</label>
          <select name="unit" value={formData.unit} onChange={handleChange} className="w-full border rounded p-2">
            <option>Select Unit/Division</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Office</label>
          <select name="office" value={formData.office} onChange={handleChange} className="w-full border rounded p-2">
            <option>Select Office</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Applicant Type</label>
          <select name="applicantType" value={formData.applicantType} onChange={handleChange} className="w-full border rounded p-2">
            <option>Select Applicant Type</option>
          </select>
        </div>

        {/* Text Inputs */}
        <div>
          <label className="block font-semibold">Employee ID/IP Number</label>
          <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Name of Applicant</label>
          <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Designation</label>
          <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Department</label>
          <select name="department" value={formData.department} onChange={handleChange} className="w-full border rounded p-2">
            <option>Select Department</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Mobile Number</label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Railway Phone Number</label>
          <input type="text" name="railwayPhone" value={formData.railwayPhone} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Email ID</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Sex</label>
          <select name="sex" value={formData.sex} onChange={handleChange} className="w-full border rounded p-2">
            <option>Select Sex</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Vehicle Type</label>
          <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} className="w-full border rounded p-2">
            <option>Select Vehicle Type</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Vehicle Registration Number</label>
          <input type="text" name="regNumber" value={formData.regNumber} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Vehicle Owner Name (RC)</label>
          <input type="text" name="rcName" value={formData.rcName} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Vehicle Ownership Type</label>
          <select name="ownershipType" value={formData.ownershipType} onChange={handleChange} className="w-full border rounded p-2">
            <option>Select Vehicle Ownership Type</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Contract Expiry Date</label>
          <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Vehicle Make & Model</label>
          <input type="text" name="makeModel" value={formData.makeModel} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block font-semibold">Vehicle Color</label>
          <input type="text" name="color" value={formData.color} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div className="col-span-full text-red-600 text-sm">
          Note: One Time Password (OTP) will only come on your Email ID.
        </div>

        <div className="col-span-full flex justify-center gap-4 mt-4">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Next</button>
          <button type="reset" className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
