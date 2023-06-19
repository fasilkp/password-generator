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

export default function Header() {
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
                                        <MDBDropdownItem link>Logout</MDBDropdownItem>
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