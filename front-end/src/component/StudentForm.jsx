import React, {useEffect, useState} from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import {toast, Toaster} from "react-hot-toast";
import {CreateStudentRequest, ListStudentByIDRequest, StudentUpdate} from "../APIRequest/APIRequest.js";
import {useNavigate} from "react-router";
import FormImg from '../assets/img/library1.jpg'

const StudentForm = () => {
    const formStyle = {
        backgroundImage: `url(${FormImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    };

    const Navigate = useNavigate();
    const[studentFormData, SetStudentFormData]=useState({firstName:"", lastName:"", gender:"", dateOfBirth:"", nationality:"", address:"", phone:"", admissionDate:"", courses:""});
    const[updateId,setUpdateId]=useState(null);

    useEffect(() => {
        (async ()=>{
            const urlParams =new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            setUpdateId(id);
            if(id!==null){
                await fillForm(id);
            }
        })()
    }, []);


    // Fill the form method if User try to update an existing user
    const fillForm=async (id)=>{
            let result = await ListStudentByIDRequest(id);
            SetStudentFormData(result);

    }

    //Getting Data from Input Field and save in state
    const formOnChange = (name,value)=>{
        SetStudentFormData((studentFormData)=>({
            ...studentFormData,
            [name]:value
        }))

    }
   //Student form Submit to API
   const StudentFormSubmit=async ()=>{
       try{

          if(studentFormData['firstName'].length ===0){
                toast.error("First Name is required");
          }
          else if(studentFormData['lastName'].length ===0){
              toast.error("Last Name is required");
          }
          else if(studentFormData['gender'].length ===0){
              toast.error("Gender is required");
          }
          else if(studentFormData['dateOfBirth'].length ===0){
              toast.error("Date of Birth is required");
          }
          else if(studentFormData['nationality'].length ===0){
              toast.error("Nationality is required");
          }
          else if(studentFormData['address'].length ===0){
              toast.error("Address is required");
          }
          else if(studentFormData['phone'].length ===0){
              toast.error("Phone number is required");
          }
          else if(studentFormData['phone'].length ===0){
              toast.error("Phone number is required");
          }
          else if(studentFormData['admissionDate'].length ===0){
              toast.error("Admission Date is required");
          }
          else if(studentFormData['courses'].length ===0){
              toast.error("course  is required");
          }
          else{
              if(updateId ===null){
                  const result = await CreateStudentRequest(studentFormData);
                  if(result){
                      toast.success("student created successfully");
                      Navigate("/")
                  }
                  else {
                      toast.error("Something Went wrong ! Please try again Later");
                  }
              }
              else{
                    const result = await StudentUpdate(updateId,studentFormData);
                    if(result){
                        toast.success("Student updated successfully");
                        Navigate("/");
                    }
                    else{
                        toast.error("Something went wrong")
                    }
              }

          }

       }catch (e) {
            toast.error('something went wrong');
       }
   }


    return (
        <div className="container ">
            <h1 className="display-4 text-center my-4">Student Registration Form</h1>
            <div className="row">
                <div className="col-md-12 border rounded p-4" style={formStyle} >
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        StudentFormSubmit();
                    }}>
                        {/* Your form fields */}
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="firstName">
                                    <Form.Label className="white-label">First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" value={studentFormData['firstName']} onChange={(e)=>formOnChange('firstName',e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="lastName">
                                    <Form.Label className="white-label">Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" value={studentFormData['lastName']} onChange={(e)=>formOnChange('lastName',e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="gender">
                                    <Form.Label className="white-label">Gender</Form.Label>
                                    <Form.Control as="select" value={studentFormData['gender']} onChange={(e)=>formOnChange('gender',e.target.value)}>
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="dob">
                                    <Form.Label className="white-label">Date of Birth</Form.Label>
                                    <Form.Control type="date" value={studentFormData['dateOfBirth']} onChange={(e)=>formOnChange('dateOfBirth',e.target.value)}/></Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="nationality">
                                    <Form.Label className="white-label">Nationality</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Nationality" value={studentFormData['nationality']} onChange={(e)=>formOnChange('nationality',e.target.value)} /></Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="address">
                                    <Form.Label className="white-label">Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Address"  value={studentFormData['address']} onChange={(e)=>formOnChange('address',e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="phone">
                                    <Form.Label className="white-label">Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Phone Number" value={studentFormData['phone']} onChange={(e)=>formOnChange('phone',e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="admissionDate">
                                    <Form.Label className="white-label">Admission Date</Form.Label>
                                    <Form.Control type="date"  value={studentFormData['admissionDate']} onChange={(e)=>formOnChange('admissionDate', e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="course">
                                    <Form.Label className="white-label">Course</Form.Label>
                                    <Form.Control type="text" placeholder="Your Course" value={studentFormData['courses']} onChange={(e)=>formOnChange('courses',e.target.value)} />
                                </Form.Group>
                            </Col>

                            {/* Other form fields similar to the above */}
                        </Row>
                        {/* Rest of your form */}
                        {/* ... */}
                        <Form.Group className="mt-3">
                            <Button variant="success"  className="w-100 btn-outline-warning" type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </div>

            </div>
            <Toaster position="bottom-center" />
        </div>
    );
};

export default StudentForm;