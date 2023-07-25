import React, { useState } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBNavbar,
  MDBRow,
  MDBCol,
  MDBNavbarBrand,
  MDBSpinner
}
  from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import axios from 'axios';
import icon from '../../images/lock.png'


function Login({ setRefresh }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    let { data } = await axios.post("/login", { email, password });
    if (data.err) {
      setErr(data.message)
    } else {
      setRefresh(refresh => !refresh)
    }
    setLoading(false)

  }
  const demoLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    let { data } = await axios.post("/login", { email:"fasil@gmail.com", password:"123" });
    if (data.err) {
      setErr(data.message)
    } else {
      setRefresh(refresh => !refresh)
    }
    setLoading(false)
  }
  return (
    <>
      <MDBNavbar light bgColor='light' className='position-sticky sticky-top'>
        <MDBContainer>
          <MDBContainer fluid className='p-0'>
            <MDBRow>
              <MDBCol>
                <MDBNavbarBrand href='#'>
                  <img
                    src={icon}
                    height='30'
                    alt=''
                    loading='lazy'
                  />
                  <b style={{ fontSize: "1rem", marginLeft: "5px" }}>PassGen</b>
                </MDBNavbarBrand>
              </MDBCol>
            </MDBRow>

          </MDBContainer>
        </MDBContainer>
      </MDBNavbar>
      <div className='d-flex flex-column justify-content-center align-items-center h-100 pt-5 mt-5' style={{ height: "100vh" }} >

        <MDBContainer className="p-3 my-5 d-flex flex-column h-50" style={{ width: "500px", maxWidth: "95%" }}>
          <h3 className='text-center'>Login to PassGen</h3>
          <span className='mt-5'></span>

          <MDBInput wrapperClass='mb-4' size='lg' value={email} onChange={(e) => setEmail(e.target.value)} label='Email address' id='form1' type='email' />
          <MDBInput wrapperClass='mb-4' size='lg' value={password} onChange={(e) => setPassword(e.target.value)} label='Password' id='form2' type='password' />

          <div className="d-flex justify-content-between mb-4">
            {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' /> */}
            {/* <a href="!#">Forgot password?</a> */}
          </div>
          {
            err &&
            <div className="text-left">
              <p className='text-danger'>{err}</p>
            </div>
          }
          <MDBBtn className="mb-4" disabled={password == "" || email == ""} onClick={handleSubmit} color='danger' size='lg'>
            Sign in
            {
              loading &&
              <MDBSpinner role='status' className='ms-2' size='sm'>
                <span className='visually-hidden'>Loading...</span>
              </MDBSpinner>
            }
          </MDBBtn>
          <MDBBtn className="mb-4" onClick={demoLogin} outline color='danger' size='lg'>
            Demo Login
            {
              loading &&
              <MDBSpinner role='status' className='ms-2' size='sm'>
                <span className='visually-hidden'>Loading...</span>
              </MDBSpinner>
            }
          </MDBBtn>
          <div className="text-center">
            <p>Not a member? <Link to="/register" className='text-danger'>Register</Link></p>
          </div>

        </MDBContainer>
      </div>
    </>


  );
}

export default Login;