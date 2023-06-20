import React from 'react';
import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBNavbar,
    MDBNavbarBrand,
    MDBRow
} from 'mdb-react-ui-kit';
import icon from '../../images/lock.png'
import axios from 'axios';

export default function Header({setRefresh}) {
    const handleLogout=async()=>{
        const {data} = await axios.get("/logout")
        setRefresh(refresh=>!refresh)
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
                            <MDBCol className='d-flex justify-content-end'>
                                <MDBDropdown>
                                    <MDBDropdownToggle color={"light"} className='shadow-none'>
                                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                        width={30} height={30}
                                        alt="" />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link onClick={handleLogout}>Logout</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBCol>
                        </MDBRow>

                    </MDBContainer>
                </MDBContainer>
            </MDBNavbar>

        </>
    );
}