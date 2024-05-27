import React from 'react';

const PatientComponent = ({ patient }) => {
  return (
    <div className='card'>
      <div className='text-container'>
        <h3>{patient.patientName}</h3>
        <p className='status'>
          {patient.gender}
        </p>
        <p className="status">
          {patient.age}
        </p>
        <p className="status">
          {patient.diagnosis}
        </p>
        <p className="title">Admission Date:</p>
        <p className="author">{patient.admissionDate}</p>
      </div>
    </div>
  );
};

export default PatientComponent;
