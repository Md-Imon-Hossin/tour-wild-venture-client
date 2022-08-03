import React from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
let activeStyle = {
  color: "#FFC300",
  fontWeight: "bold"
};
const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <Navbar bg="dark" expand="xl" variant='dark' >
        <Container>
          <div className='header-menu-left'>
            <h2 className='text-white'>Wild Venture</h2>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto header-menu">

              <NavLink
                to="/home"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Home
              </NavLink>


              <NavLink
                to="/placeOrder"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                PlaceOrder
              </NavLink>

              {/* conditional rendering when login button will be showned then this is menu items are showing display here */}

              {

                user?.email && <div>
                  <NavLink
                    to="/services/addService"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Add a New Service
                  </NavLink>

                  <NavLink
                    to="/myOrders"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    MyOrders
                  </NavLink>

                  <NavLink
                    to="/manageAllOrders"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    ManageAllOrders
                  </NavLink>
                </div>

              }

              <NavLink
                to="/login"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                LogIn
              </NavLink>
              <span className='text-white me-3'> {user?.displayName}</span>
              {user?.email && <Button onClick={logOut} variant='warning'>LogOut</Button>}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>


  );
};

export default Header;