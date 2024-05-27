import {BrowserRouter as Router, Link, Route, Routes  } from 'react-router-dom';
import './App.css';
import GetAllPatientsComponent from './components/GetAllPatientsComponent/GetAllPatientsComponent';
import AddNewPatientsComponent from './components/AddNewPatientsComponent/AddNewPatientsComponent';
import DeletePatientsComponent from './components/DeletePatientsComponent/DeletePatientsComponent'
import EditPatientsComponent from './components/EditPatientsComponent/EditPatientsComponent'


function App() {
  return (
    <Router>
            <div className="container">
              <h1>Hospital Management App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Patients</Link>
                <Link to="/admin/edit" >Edit Patients</Link>
                <Link to="/admin/delete" >Delete Patients</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllPatientsComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewPatientsComponent/>}></Route>
                 <Route path='/admin/edit' element={<EditPatientsComponent/>}></Route>
                 <Route path='/admin/delete' element={<DeletePatientsComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
