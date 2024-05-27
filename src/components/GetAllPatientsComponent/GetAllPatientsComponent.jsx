import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PatientComponent from './PatientComponent';
import './GetAllPatientsComponent.css'

const GetAllPatientsComponent = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3500/api/v1/patients')
      .then(response => 
        {
          setPatients(response.data)
        })
      .catch(error => console.log(error));
  });

  return (
    <div className='books'>
      {patients.map((patient, index) => (
        <PatientComponent patient={patient} key={index} />
      ))}
    </div>
  );
};

export default GetAllPatientsComponent;
