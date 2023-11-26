import React, {useEffect, useState} from 'react';
import {DeleteStudent, ListStudentRequest} from "../APIRequest/APIRequest.js";
import {Link} from "react-router-dom";
import {toast, Toaster} from "react-hot-toast";

const StudentList = () => {
    const[studentData,SaveStudentData]= useState([]);
    const[change,setChange]=useState(0)

    useEffect(() => {
        (async ()=>{
            let result = await ListStudentRequest();
            console.log(result);
            SaveStudentData(result);
        })()
    }, [change]);

    const onDelete =async (id)=>{
        try{
            let result =await DeleteStudent(id);
            if(result){
                toast.success("Student is deleted successfully");
                setChange(new Date().getTime())
            }
            else{
                toast.error('Something went wrong');
            }
        }catch (e) {
            toast.error('Something went wrong');
        }

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive">
                        {
                            studentData.length === 0 ? (
                                <div><h1>Loading...</h1></div>
                            ) : (
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Gender</th>
                                        <th>DOB</th>
                                        <th>Nationality</th>
                                        <th>Address</th>
                                        <th>Phone</th>
                                        <th>Admission Date</th>
                                        <th>Course</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {studentData.map((item,i) => (
                                        <tr key={i}>
                                            <td>{item['firstName']}</td>
                                            <td>{item['lastName']}</td>
                                            <td>{item['gender']}</td>
                                            <td>{item['dateOfBirth']}</td>
                                            <td>{item['nationality']}</td>
                                            <td>{item['address']}</td>
                                            <td>{item['phone']}</td>
                                            <td>{item['admissionDate']}</td>
                                            <td>{item['courses']}</td>


                                            {/* Add action buttons or elements */}
                                            <td>
                                                <button onClick={()=>{onDelete(item['_id'])}} className="btn btn-danger">Delete</button>
                                                <Link  className="btn btn-success mx-2" to={"/save?id="+item['_id']}>Edit</Link>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            )
                        }
                    </div>
                </div>
            </div>
            <Toaster position="bottom-center"/>
        </div>
    );
};

export default StudentList;