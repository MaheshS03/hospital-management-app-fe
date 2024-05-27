import React, { useState } from 'react';
import axios from 'axios';
import './DeletePatientsComponent.css'

const DeletePatientsComponent = () => {
  const [patientInfo, setPatientInfo] = useState({
    patientID: '',
    patientName: '',
    gender: '',
    age: '',
    diagnosis: '',
    admissionDate: ''
  });

  const patientIDHandler = (event) => {
    setPatientInfo({
      ...patientInfo,
      patientID: event.target.value
    });
  };

  const patientIDValidate = () => {
    axios
      .post(`http://localhost:3500/api/v1/patients/validate`, {patientID : patientInfo.patientID})
      .then(response => {
        setPatientInfo({
          patientID : response.data.patientID,
          patientName : response.data.patientName,
          gender : response.data.gender,
          age : response.data.age,
          diagnosis : response.data.diagnosis,
          admissionDate : response.data.admissionDate
        })
      })
      .catch(error => {
        if(error.response)
          {
            alert(`Status ${error.response.status} - ${error.response.message}`)
          }
      })
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    axios
      .delete(`http://localhost:3500/api/v1/patients/admin/delete`, {data : patientInfo})
      .then(response => {
        alert(`${patientInfo.patientName} is deleted successfully`);
        window.location.href = '/';
      })
      .catch(error => {
        if (error.response) {
          alert(`Status ${error.response.status} - ${error.response.message}`);
        }
      });
  };

  const { patientID, patientName, gender, age, diagnosis, admissionDate } = patientInfo;

  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <h2>Deleting patient</h2>

      <div className="form-group"> 
        <label>Patient ID</label>
        <input
          type='text'
          placeholder='Enter the patient ID'
          value={patientID}
          onChange={patientIDHandler}
          required
        />
      </div>

      <div>
        <button type="button" onClick={patientIDValidate}>Fetch Patient Info</button>
      </div>

      <div className="form-group">
        <label>Patient Name</label>
        <input
          type='text'
          placeholder='Enter the patient name'
          value={patientName}
          readOnly 
          required
        />
      </div>

      <div className="form-group">
        <label>Gender</label>
        <input
          type='text'
          placeholder='Enter the gender'
          value={gender}
          readOnly 
          required
        />
      </div>

      <div className="form-group">
        <label>Age</label>
        <input
          type='number'
          placeholder='Enter the age'
          value={age}
          readOnly
          required
        />
      </div>

      <div className="form-group">
        <label>Diagnosis</label>
        <input
          type='text'
          placeholder='Enter the diagnosis'
          value={diagnosis}
          readOnly 
          required
        />
      </div>

      <div className="form-group">
        <label>Admission Date</label>
        <input
          type='date'
          placeholder='Enter the admission date'
          value={admissionDate}
          readOnly 
          required
        />
      </div>

      <div>
        <button type='submit'>Delete</button>
      </div>
    </form>
  );
};

export default DeletePatientsComponent;
