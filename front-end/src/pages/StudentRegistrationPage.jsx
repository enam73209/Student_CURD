import React from 'react';
import AppNavBar from "../component/AppNavBar.jsx";
import StudentForm from "../component/StudentForm.jsx";
import FormImg from '../assets/img/library1.jpg'

const StudentRegistrationPage = () => {

    return (
        <div >
            <AppNavBar/>
            <StudentForm/>
        </div>
    );
};

export default StudentRegistrationPage;