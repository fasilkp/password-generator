import React, {  useEffect, useState } from 'react';
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
import generatePassword from '../helper/generatePassword';
import copyToClipboard from '../helper/copyToClipboard';
import axios from 'axios';

export default function AddPasswordModal({ open, setOpen }) {
    const toggleShow = () => setOpen(!open);
    const [password, setPassword]= useState('')
    const [appName, setAppName]= useState("")
    const [userName, setUserName]= useState("")
    const [refresh, setRefresh] = useState(true)
    const [option, setoption]= useState({
        upperCase:true,
        numbers:true,
        symbols:false
    })
    const [length, setLength]= useState(8)
    useEffect(()=>{
        try{
            let newPassword= generatePassword(option, length)
            setPassword(newPassword)

        }catch(err){
            console.log(err)
        }
    },[option, open, length, refresh])
    const handleLengthChange=((e)=>{
        setLength(e.target.value)
    })
    const addPassword=async()=>{
        const {data} = await axios.post("/password/add", {appName, userName, password});
        console.log(data)
        if(data.err){
            console.log(data.message)
        }
    }

    return (
        <>
            <MDBModal tabIndex='-1' show={open} setShow={setOpen}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Add Password</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBRow className='ps-2 pe-2 mt-3'>
                                <MDBInput label='Generated password' value={password} onChange={(e)=>setPassword(e.target.value)} id='form1' type='text' size='lg' />
                            </MDBRow>
                            <MDBRow className='ps-2 pe-2 mt-3'>
                                <MDBBtn color='danger' onClick={()=>copyToClipboard(password)} outline className='w-95'>Copy Password</MDBBtn>
                            </MDBRow>
                            <MDBRow className='ps-2 pe-2 mt-3'>
                                <MDBInput label='App name' value={appName} onChange={(e)=>setAppName(e.target.value)} id='form1' type='text' size='lg' />
                            </MDBRow>
                            <MDBRow className='ps-2 pe-2 mt-3'>
                                <MDBInput label='User Name' value={userName} onChange={(e)=>setUserName(e.target.value)} id='form1' type='text' size='lg' />
                            </MDBRow>
                            <MDBRow className='mt-4'>
                                <div className='d-flex justify-content-between flex-row align-items-center'>
                                    <span>Length</span>
                                    <div className="badge badge-primary p-3 rounded-5">{length}</div>
                                </div>
                                <MDBRange
                                    defaultValue={length}
                                    min='5'
                                    max='64'
                                    step='1'
                                    onChange={handleLengthChange}
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
                            <MDBRow className='mt-3 ps-2 pe-2'>
                            <MDBBtn color='danger' className='w-100' onClick={()=>setRefresh(!refresh)} rounded>
                                Generate new
                            </MDBBtn>
                            </MDBRow>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='danger' outline onClick={toggleShow} rounded>
                                Close
                            </MDBBtn>
                            <MDBBtn color='danger' onClick={addPassword} rounded disabled={appName=="" || userName=="" || password==""}>Save</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}