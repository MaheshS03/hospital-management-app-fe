import React, { useState } from 'react';
import axios from 'axios';
import './EditPatientsComponent.css'

const EditPatientsComponent = () => {
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

  const patientNameHandler = (event) => {
    setPatientInfo({
      ...patientInfo,
      patientName: event.target.value
    });
  };

  const genderHandler = (event) => {
    setPatientInfo({
      ...patientInfo,
      gender: event.target.value
    });
  };

  const ageHandler = (event) => {
    setPatientInfo({
      ...patientInfo,
      age: event.target.value
    });
  };

  const diagnosisHandler = (event) => {
    setPatientInfo({
      ...patientInfo,
      diagnosis: event.target.value
    });
  };

  const admissionDateHandler = (event) => {
    setPatientInfo({
      ...patientInfo,
      admissionDate: event.target.value
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    axios
      .patch(`http://localhost:3500/api/v1/patients/admin/edit`, patientInfo)
      .then(response => {
        alert(`${patientInfo.patientName} is updated successfully`);
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
      <h2>Updating patient</h2>

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
          onChange={patientNameHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Gender</label>
        <input
          type='text'
          placeholder='Enter the gender'
          value={gender}
          onChange={genderHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Age</label>
        <input
          type='number'
          placeholder='Enter the age'
          value={age}
          onChange={ageHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Diagnosis</label>
        <input
          type='text'
          placeholder='Enter the diagnosis'
          value={diagnosis}
          onChange={diagnosisHandler}
          required
        />
      </div>

      <div className="form-group">
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
        <button type='submit'>Update</button>
      </div>
    </form>
  );
};

export default EditPatientsComponent;
