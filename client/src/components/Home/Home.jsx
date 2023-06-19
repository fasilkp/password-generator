import React, { useState } from 'react';
import {
    MDBBadge,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow
} from 'mdb-react-ui-kit';
import Header from '../Header/Header';
import AddPasswordModal from '../../modal/AddPasswordModal'
import GeneratePasswordModal from '../../modal/GeneratePasswordModal';


export default function Home() {
    const [showAddModal, setShowAddModal]= useState(false)
    const [showGenerateModal, setShowGenerateModal]= useState(false)
    return (
        <>
            <Header></Header>
            <MDBContainer className='mt-5'>
                <MDBRow className='mt-3'>
                    <h5>Home</h5>
                </MDBRow>
                <MDBRow className='mt-1'>
                    <MDBContainer fluid>
                        <MDBRow>
                            <MDBCol md={6}>
                                <MDBBtn className='w-100 mt-2' color="danger" outline rounded style={{height:"50px"}} onClick={()=>setShowGenerateModal(true)} >
                                    Generate Password
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md={6}>
                                <MDBBtn className='w-100 mt-2' color='danger' rounded style={{height:"50px"}} onClick={()=>setShowAddModal(true)} >
                                    Add password
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBRow>
                <MDBRow className='mt-5'>
                    <h5>Saved Passwords</h5>
                </MDBRow>
                <MDBRow className='mt-3'>
                    <MDBCol xl={6} className='mb-4'>
                        <MDBCard>
                            <MDBCardBody>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center'>
                                        <img src="https://lh4.googleusercontent.com/zxHGfDuP9OcnUCHnOaV77PUez3jUnliiGJr4GmdExFZxMe5X3nqG9R8qTcBFcknkQ_lxT-rtQS42jXWqWr9E-xMNv50ri-pFg-HdQi_MQ-j75jkYuf5KILd8RdG8SC4zp8FMqJME9_atihTsBujbVdQAj_jwd6I0Tc3XP0stjsW_AHxAuX-OED49xizrBA" alt style={{ height: 65 }} className="rounded-circle" />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>John Doe</p>
                                            <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                        </div>
                                    </div>

                                </div>
                            </MDBCardBody>
                            <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0' >
                                    Edit 
                                    <MDBIcon fas icon='pen' className='ms-3'  />
                                </MDBBtn>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                                    Copy <MDBIcon fas icon='clipboard' className='ms-3' />
                                </MDBBtn>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol xl={6} className='mb-4'>
                        <MDBCard>
                            <MDBCardBody>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center'>
                                        <img src="https://lh4.googleusercontent.com/zxHGfDuP9OcnUCHnOaV77PUez3jUnliiGJr4GmdExFZxMe5X3nqG9R8qTcBFcknkQ_lxT-rtQS42jXWqWr9E-xMNv50ri-pFg-HdQi_MQ-j75jkYuf5KILd8RdG8SC4zp8FMqJME9_atihTsBujbVdQAj_jwd6I0Tc3XP0stjsW_AHxAuX-OED49xizrBA" alt style={{ height: 65 }} className="rounded-circle" />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>John Doe</p>
                                            <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                        </div>
                                    </div>

                                </div>
                            </MDBCardBody>
                            <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0' >
                                    Edit 
                                    <MDBIcon fas icon='pen' className='ms-3'  />
                                </MDBBtn>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                                    Copy <MDBIcon fas icon='clipboard' className='ms-3' />
                                </MDBBtn>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol xl={6} className='mb-4'>
                        <MDBCard>
                            <MDBCardBody>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center'>
                                        <img src="https://lh4.googleusercontent.com/zxHGfDuP9OcnUCHnOaV77PUez3jUnliiGJr4GmdExFZxMe5X3nqG9R8qTcBFcknkQ_lxT-rtQS42jXWqWr9E-xMNv50ri-pFg-HdQi_MQ-j75jkYuf5KILd8RdG8SC4zp8FMqJME9_atihTsBujbVdQAj_jwd6I0Tc3XP0stjsW_AHxAuX-OED49xizrBA" alt style={{ height: 65 }} className="rounded-circle" />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>John Doe</p>
                                            <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                        </div>
                                    </div>

                                </div>
                            </MDBCardBody>
                            <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0' >
                                    Edit 
                                    <MDBIcon fas icon='pen' className='ms-3'  />
                                </MDBBtn>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                                    Copy <MDBIcon fas icon='clipboard' className='ms-3' />
                                </MDBBtn>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol xl={6} className='mb-4'>
                        <MDBCard>
                            <MDBCardBody>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center'>
                                        <img src="https://lh4.googleusercontent.com/zxHGfDuP9OcnUCHnOaV77PUez3jUnliiGJr4GmdExFZxMe5X3nqG9R8qTcBFcknkQ_lxT-rtQS42jXWqWr9E-xMNv50ri-pFg-HdQi_MQ-j75jkYuf5KILd8RdG8SC4zp8FMqJME9_atihTsBujbVdQAj_jwd6I0Tc3XP0stjsW_AHxAuX-OED49xizrBA" alt style={{ height: 65 }} className="rounded-circle" />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>John Doe</p>
                                            <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                        </div>
                                    </div>

                                </div>
                            </MDBCardBody>
                            <MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0' >
                                    Edit 
                                    <MDBIcon fas icon='pen' className='ms-3'  />
                                </MDBBtn>
                                <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                                    Copy <MDBIcon fas icon='clipboard' className='ms-3' />
                                </MDBBtn>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                   

                </MDBRow>
            </MDBContainer>
            <AddPasswordModal open={showAddModal} setOpen={setShowAddModal} />
            <GeneratePasswordModal open={showGenerateModal} setOpen={setShowGenerateModal} />
        </>


    );
}