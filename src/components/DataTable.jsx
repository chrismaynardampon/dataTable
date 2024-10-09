/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import calculateAge from './calculateAge.jsx';
import Students from './students.jsx';
import './Table.jsx';
import Table from './Table.jsx';

const DataTable = ({students}) => {

  return (
    <div >
      <Table.TableContainer>
      <Table.Thead>
        <Table.Row>
          <Table.ColumnHeader>Last Name</Table.ColumnHeader>
          <Table.ColumnHeader>First Name</Table.ColumnHeader>
          <Table.ColumnHeader>Course</Table.ColumnHeader>
          <Table.ColumnHeader>Birthdate</Table.ColumnHeader>
          <Table.ColumnHeader>Age</Table.ColumnHeader>
        </Table.Row>
      </Table.Thead>
      <Table.Tbody>
        {students.length > 0 ? (
          students.map((student) => (
              <Students lastName={student.lastName} firstName={student.firstName} course={student.course} birthdate={student.birthdate} age={calculateAge(student.birthdate)}/>
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{ textAlign: 'center', padding:'10px' }}>No Data Found</td>
          </tr>
        )}
      </Table.Tbody>
      </Table.TableContainer>
    </div>
  );
};

export default DataTable
