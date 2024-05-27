import React, { useState } from 'react';
import axios from 'axios';
import './AddNewPatientsComponent.css'

const AddNewPatientsComponent = () => {
  const [patientInfo, setPatientInfo] = useState({
    patientID: '',
    patientName: '',
    gender: '',
    age: '',
    diagnosis: '',
    admissionDate: '',
  });

  const patientIDHandler = (event) => {
    setPatientInfo({
      ...patientInfo,
      patientID: event.target.value,
    });
  };

  const patientNameHandler = (event) => {
    setPatientInfo({
      ...patientInfo,
      patientName: event.target.value,
    });
  };

  const genderHandler = (event) => {
    setPatientInfo({
      ...patientInfo,
      gender: event.target.value,
    });
  };

  const ageHandler = (event) => {
    setPatientInfo({
      ...patientInfo,
      age: event.target.value,
    });
  };

  const diagnosisHandler = (event) => {
    setPatientInfo({
      ...patientInfo,
      diagnosis: event.target.value,
    });
  };

  const admissionDateHandler = (event) => {
    setPatientInfo({
      ...patientInfo,
      admissionDate: event.target.value,
    });
  };

  const { patientID, patientName, gender, age, diagnosis, admissionDate } = patientInfo;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    axios
      .post('http://localhost:3500/api/v1/patients/admin/add', patientInfo)
      .then(response => {
        alert(`${response.data.patientName} is added successfully`);
        window.location.href = '/';
      })
      .catch(error => {
        if (error.response) {
          alert(`Status ${error.response.status} - ${error.response.message}`);
        }
      });
  };

  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Adding a new patient</h2>

      <div className='form-group'>
        <label>Patient ID</label>
        <input
          type='text'
          placeholder='Enter the patient ID'
          value={patientID}
          onChange={patientIDHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Patient Name</label>
        <input
          type='text'
          placeholder='Enter the patient name'
          value={patientName}
          onChange={patientNameHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Gender</label>
        <input
          type='text'
          placeholder='Enter the gender'
          value={gender}
          onChange={genderHandler}
          required
        />
      </div>

      <div>
        <label className='form-group'>Age</label>
        <input
          type='number'
          placeholder='Enter the age'
          value={age}
          onChange={ageHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Diagnosis</label>
        <input
          type='text'
          placeholder='Enter the diagnosis'
          value={diagnosis}
          onChange={diagnosisHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Admission Date</label>
        <input
          type='date'
          placeholder='Enter the admission date'
          value={admissionDate}
          onChange={admissionDateHandler}
          required
        />
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default AddNewPatientsComponent;
