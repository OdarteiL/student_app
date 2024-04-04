

function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.indexNumber}>{student.lastName} - {student.indexNumber}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
