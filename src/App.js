import logo from './logo.svg';
import './App.css';
import Navbar from './core/common/Navbar';
import HomePage from './core/pages/HomePage';
import { Routes,Route } from 'react-router-dom';
import AllFormsPage from './core/pages/AllFormsPage';
import FormCreationPage from './core/pages/FormCreationPage';
import FormFillAndViewPage from './core/pages/FormFillAndViewPage';

function App() {
  return (
    <div className={`w-full min-h-screen  bg-richblue-5 overflow-hidden flex flex-col font-inter`}>
    <Navbar  />
    <Routes>
       <Route path="/" element ={<HomePage/>} />
      <Route path="/viewAllForms" element ={<AllFormsPage/>} />
      <Route path="/createForm" element ={<FormCreationPage/>} />
      <Route path="/viewform/:formId" element={<FormFillAndViewPage/>} /> 
       {/* <Route path="*" element ={<DevOr404Page/>} /> */}
       

     
    </Routes>
  </div>
  );
}

export default App;
