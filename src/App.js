import logo from './logo.svg';
import './App.css';
import Navbar from './core/common/Navbar';
import HomePage from './core/pages/HomePage';
import { Routes,Route } from 'react-router-dom';
import AllFormsPage from './core/pages/AllFormsPage';
import FormCreationPage from './core/pages/FormCreationPage';
import FormFillAndViewPage from './core/pages/FormFillAndViewPage';
import LoginSingPage from './core/pages/LoginSingPage';
import Login from './core/common/Login';
import Singup from './core/common/Singup';

function App() {
  return (
    <div className={`w-full min-h-screen  bg-richblue-5 overflow-hidden flex flex-col font-inter`}>
    <Navbar  />
    <Routes>
       <Route path="/" element ={<HomePage/>} />
      <Route path="/viewAllForms" element ={<AllFormsPage/>} />
      <Route path="/createForm" element ={<FormCreationPage/>} />
      <Route path="/viewform/:formId" element={<FormFillAndViewPage/>} /> 
      <Route path="/viewformData/:formId" element={<FormFillAndViewPage/>} /> 
      <Route element={<LoginSingPage/>}>
          <Route path="auth/login" element={<Login />} /> 
          <Route path="auth/signup" element={<Singup />} />
      </Route>
       {/* <Route path="*" element ={<DevOr404Page/>} /> */}
       

     
    </Routes>
  </div>
  );
}

export default App;
