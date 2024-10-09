/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import DataTable from './components/DataTable';
import FilterStudentsTable from './components/FilterStudentsTable';
import SearchBar from './components/SearchBar';
import calculateAge from './components/calculateAge';

const studentsData = [
  { lastName: 'Doe', firstName: 'John', course: 'IT', birthdate: '1990/10/12' },
  { lastName: 'Smith', firstName: 'Jane', course: 'CS', birthdate: '1992/01/05' },
  { lastName: 'Brown', firstName: 'Mike', course: 'IS', birthdate: '1995/03/22' },
  { lastName: 'Johnson', firstName: 'Lucy', course: 'DS', birthdate: '1997/08/16' },
  { lastName: 'Taylor', firstName: 'Alice', course: 'IT', birthdate: '2000/07/14' },
  { lastName: 'Miller', firstName: 'Ethan', course: 'CS', birthdate: '2003/12/10' },
  { lastName: 'Davis', firstName: 'Olivia', course: 'DS', birthdate: '1994/05/20' },
  { lastName: 'Garcia', firstName: 'Chris', course: 'IS', birthdate: '2010/09/01' },
  { lastName: 'Martinez', firstName: 'Sophia', course: 'IT', birthdate: '2013/11/23' }
];


const App = () => {
  const [filterText, setFilterText] = useState('');
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  const filteredData = studentsData.filter(student => {
    const birthDate = new Date(student.birthdate);

    const filterMatch =
      student.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
      student.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      student.course.toLowerCase().includes(filterText.toLowerCase()) ||
      calculateAge(student.birthdate).toString().includes(filterText);

    const minDateCheck = minDate ? new Date(minDate) <= birthDate : true;
    const maxDateCheck = maxDate ? new Date(maxDate) >= birthDate : true;

    return filterMatch && minDateCheck && maxDateCheck;
  });

  return (
    <FilterStudentsTable>
      <h1>Students Table</h1>
      <SearchBar filterText={filterText} setFilterText={setFilterText} minDate={minDate} setMinDate={setMinDate} maxDate={maxDate} setMaxDate={setMaxDate}/>
      <DataTable students={filteredData} />
    </FilterStudentsTable>
    );
};

export default App;