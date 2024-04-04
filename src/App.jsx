import "./App.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import PopUp from "./components/PopUp";
import { useState } from "react";

function App() {

  const [showPopUp, setShowPopUp] = useState(false)

  const handleDelete = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    indexNumber: "",
    contactNumber: "",
  });

  const handleEdit = (id) => {
    const studentToEdit = students.find((student) => student.id === id);
    setFormData({
      firstName: studentToEdit.firstName,
      lastName: studentToEdit.lastName,
      indexNumber: studentToEdit.indexNumber,
      contactNumber: studentToEdit.contactNumber,
    });
    setShowPopUp(true); // Show the popup for editing
  };

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
    setShowPopUp(true); 
  }

  const [students, setStudents] = useState([
    {
      id: 1,
      firstName: "Ama",
      lastName: "Kwapong",
      indexNumber: "202400124",
      contactNumber: "0502024235",
    },
    {
      id: 2,
      firstName: "Kofi",
      lastName: "Obongo",
      indexNumber: "202400125",
      contactNumber: "0542024235",
    },
    {
      id: 3,
      firstName: "Kwame",
      lastName: "Otangi",
      indexNumber: "202400126",
      contactNumber: "0564024245",
    },
  ]);

  // const handleAddStudent = () => {
  //   setShowPopUp(true)
  // }

  const handleClosePopUp = () => {
    setShowPopUp(false)
  }

  return (
    <>
      <div>
        <div className="flex justify-center mx-auto bg-gray-50 w-[53%] py-8">
          STUDENT DETAIL DASHBOARD
        </div>
        <div className="flex justify-center">
          <table className="w-60%">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  FIRST NAME
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  LAST NAME
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  {" "}
                  INDEX NO
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  CONTACT
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((row) => (
                <tr key={row.id}>
                  <td className="px-6 py-4 whitespace-no-wrap">{row.id}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {row.firstName}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {row.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {row.indexNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {row.contactNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="flex gap-3">
                      <MdDelete onClick={() => handleDelete(row.id)} /> 
                      <FaEdit onClick={() => handleEdit(row.id)}/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="flex items-center gap-1 mx-auto my-6 bg-blue-600 text-white px-5 py-2 rounded-lg" onClick={() => setShowPopUp(true)}>
          {" "}
          <IoIosAddCircleOutline /> Add Student
        </button>
      </div>

      <div className=" z-10 absolute top-0 left-[400px]">
      {showPopUp && <PopUp onClose={handleClosePopUp} onAdd={handleAddStudent} students={students} formData={formData} setFormData={setFormData}/>}
      </div>
    </>
  );
}

export default App;
