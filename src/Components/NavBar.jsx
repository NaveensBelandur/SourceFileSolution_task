import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit'

import { NavLink } from 'react-router-dom'







const NavBar = () => {
  return (
    <React.Fragment>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Test App</MDBNavbarBrand>

          <MDBCollapse navbar  >
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  <NavLink to='/'>Home</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink   ><NavLink to='/about'>About Page</NavLink></MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='#'><NavLink to='/Post'>Post</NavLink></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'><NavLink to='/Postdetails'>Post Details</NavLink></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'><NavLink to='/Contact'>Contact</NavLink></MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>

          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </React.Fragment>
  )
}





export default NavBar