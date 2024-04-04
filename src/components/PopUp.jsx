import { useState } from "react";
import PropTypes from "prop-types";

const PopUp = ({ onClose, onAdd, students }) => {
    
    
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    indexNumber: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: students.length + 1, // Assign a unique id to the new student
      firstName: formData.firstName,
      lastName: formData.lastName,
      indexNumber: formData.indexNumber,
      contactNumber: formData.contactNumber,
    };
    onAdd(newStudent);
    onClose();
  };
  

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg w-96">
          <h2 className="text-xl font-bold mb-4">Add Student</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Index Number
              </label>
              <input
                type="text"
                name="indexNumber"
                value={formData.indexNumber}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Contact Number
              </label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Add
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

PopUp.propTypes = {
    onClose: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    students: PropTypes.array.isRequired,
  };

export default PopUp;
