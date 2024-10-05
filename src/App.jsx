/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Sample data
const studentsData = [
  { lastName: 'Doe', firstName: 'John', course: 'IT', birthdate: '1995/10/12' },
  { lastName: 'Smith', firstName: 'Jane', course: 'CS', birthdate: '2000/01/05' },
  { lastName: 'Brown', firstName: 'Mike', course: 'IS', birthdate: '1998/03/22' },
  { lastName: 'Johnson', firstName: 'Lucy', course: 'DS', birthdate: '1997/08/16' }
];

// Utility function to calculate age
const calculateAge = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

const DataTable = () => {
  const [filterText, setFilterText] = useState('');
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  // Filter logic
  const filteredData = studentsData.filter(student => {
    const birthDate = new Date(student.birthdate);

    // Check filter text (Last Name, First Name, Age, or Course)
    const filterMatch =
      student.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
      student.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      student.course.toLowerCase().includes(filterText.toLowerCase()) ||
      calculateAge(student.birthdate).toString().includes(filterText);

    // Check date range filter
    const minDateCheck = minDate ? new Date(minDate) <= birthDate : true;
    const maxDateCheck = maxDate ? new Date(maxDate) >= birthDate : true;

    return filterMatch && minDateCheck && maxDateCheck;
  });

  return (
    <div >
      <h1>Student Data Table</h1>
      <input
        type="text"
        placeholder="Search"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <br />
      <label>Min Date: </label>
      <input
        type="date"
        value={minDate}
        onChange={(e) => setMinDate(e.target.value)}
      />

      <label>Max Date: </label>
      <input
        type="date"
        value={maxDate}
        onChange={(e) => setMaxDate(e.target.value)}
      />
      <table border="1" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Course</th>
            <th>Birthdate</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((student, index) => (
              <tr key={index}>
                <td>{student.lastName}</td>
                <td>{student.firstName}</td>
                <td>{student.course}</td>
                <td>{student.birthdate}</td>
                <td>{calculateAge(student.birthdate)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <DataTable />
    </div>
  );
};

export default App;