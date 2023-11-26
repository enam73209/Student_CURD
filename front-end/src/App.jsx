import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StudentListPage from "./pages/StudentListPage.jsx";
import StudentRegistrationPage from "./pages/StudentRegistrationPage.jsx";


function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StudentListPage/>}/>
                <Route path="/save" element={<StudentRegistrationPage/>}/>
            </Routes>
        </BrowserRouter>
  )
}

export default App
