import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import New from './Components/SubSections/New';
import Saved from './Components/SubSections/Saved';
import Open from './Components/SubSections/Open';
import About from './Components/SubSections/About';
import Close from './Components/SubSections/Close';
import Gender from './Components/Project/Gender/Gender';
import Age from './Components/Project/Gender/Age/Age';
import Ethinicity from './Components/Project/Gender/Age/Ethinicity/Ethinicity';
import Describe from './Components/Project/Gender/Age/Ethinicity/Describe/Describe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/New' element={<New />} />
            <Route path='/Saved' element={<Saved />} />
            <Route path='/Open' element={<Open />} />
            <Route path='/About' element={<About />} />
            <Route path='/Close' element={<Close />} />
            <Route path='/Gender' element={<Gender />} />
            <Route path='/Age' element={<Age />} />
            <Route path='/Ethinicity' element={<Ethinicity />} />
            <Route path='/Describe' element={<Describe />} />
          </Route>
        </Routes>      
    </BrowserRouter>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
