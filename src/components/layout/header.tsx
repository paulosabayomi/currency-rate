import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { NavbarProps } from 'mdb-react-ui-kit/dist/types/free/navigation/Navbar/types';

const Header: React.FC<NavbarProps> = React.memo(() => {

  return (
    <MDBNavbar expand='xs' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Currency Rate</MDBNavbarBrand>
        <MDBCollapse navbar open={true}>
          <MDBNavbarNav className='m-0'>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
})

export default Header;