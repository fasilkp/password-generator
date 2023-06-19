import React, { useState } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

export default function Register() {
    const [email,setEmail]= useState("")
    const [passsword,setPassword]= useState("")
    const [name,setName]= useState("")
  return (
    <div className='d-flex justify-content-center align-items-center h-100 pt-5 mt-5' style={{height:"100vh"}} >

    <MDBContainer className="p-3 my-5 d-flex flex-column h-50" style={{width:"500px", maxWidth:"95%"}}>
        <h3 className='text-center'>Login to PassGen</h3>
        <span className='mt-5'></span>

      <MDBInput wrapperClass='mb-4' size='lg' value={name} onChange={(e)=>setName(e.target.value)} label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' size='lg' value={email} onChange={(e)=>setEmail(e.target.value)} label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' size='lg' value={passsword} onChange={(e)=>setPassword(e.target.value)} label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mb-4">
        {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' /> */}
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" size='lg'>Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
      </div>

    </MDBContainer>
    </div>

  );
}
