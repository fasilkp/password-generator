import React, {  useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBRow,
    MDBInput,
    MDBRange,
    MDBSwitch,
} from 'mdb-react-ui-kit';

export default function AddPasswordModal({ open, setOpen }) {
    const toggleShow = () => setOpen(!open);
    const [password, setPassword]= useState('')
    const [option, setoption]= useState({
        upperCase:false,
        numbers:false,
        symbols:false
    })
    const [length, setLength]= useState(8)

    return (
        <>
            {/* <MDBBtn onClick={toggleShow}>Vertically centered modal</MDBBtn> */}

            <MDBModal tabIndex='-1' show={open} setShow={setOpen}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Add Password</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBRow className='ps-2 pe-2'>
                                <MDBInput label='Generated password' value={password} onChange={(e)=>setPassword(e.target.value)} id='form1' type='text' size='lg' />
                            </MDBRow>
                            <MDBRow className='mt-4'>
                                <div className='d-flex justify-content-between flex-row align-items-center'>
                                    <span>Length</span>
                                    <div class="badge badge-primary p-3 rounded-5">{length}</div>
                                </div>
                                <MDBRange
                                    defaultValue={length}
                                    min='5'
                                    max='64'
                                    step='1'
                                    onChange={(e)=>setLength(e.target.value)}
                                    value={length}
                                    id='customRange3'
                                    className='mt-2'
                                    label=''
                                />
                            </MDBRow>
                            <MDBRow className='mt-3'>
                                <div className='d-flex justify-content-between flex-row'>
                                    <label htmlFor='numberCheck'>Include Numbers</label>
                                    <MDBSwitch checked={option.numbers} color='danger' onChange={(e)=>setoption({...option, numbers:e.target.checked})}/>
                                </div>
                            </MDBRow>
                            <MDBRow className='mt-3'>
                                <div className='d-flex justify-content-between flex-row'>
                                    <label htmlFor='capCheck'>Incluse Uppercase letters</label>
                                    <MDBSwitch checked={option.upperCase} color='danger' onChange={(e)=>setoption({...option, upperCase:e.target.checked})}/>
                                </div>
                            </MDBRow>
                            <MDBRow className='mt-3'>
                                <div className='d-flex justify-content-between flex-row'>
                                    <label htmlFor='sympolCheck'>Include Symbols</label>
                                    <MDBSwitch checked={option.symbols} color='danger' onChange={(e)=>setoption({...option, symbols:e.target.checked})}/>
                                </div>
                            </MDBRow>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='danger' outline onClick={toggleShow} rounded>
                                Close
                            </MDBBtn>
                            <MDBBtn color='danger' rounded>Save</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}