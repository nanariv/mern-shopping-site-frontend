import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import "./profile.css";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";



const userid = localStorage.getItem('userid');


export default function PersonalProfile() {
  const [uName, setUName] = useState('')
  const [eId, setEId] = useState('')
  const headers = {
  "Access-Control-Allow-Origin": "*",
}
  const requestURL = "https://climbers-project-todo-backend.glitch.me/";
  useEffect(() => {
    // Update the document title using the browser API
    axios.get(requestURL + "users/"+userid, {"headers": headers})
  .then((response) => {
   const {emailId, username}= (response.data);
   setEId(emailId);
   setUName(username);
  });
  },[]);
    
  return (
   <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '50%' }} fluid />
                  <MDBTypography tag="h5">{uName}</MDBTypography>
                  <MDBCardText>University of Pittsburgh</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{eId}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
