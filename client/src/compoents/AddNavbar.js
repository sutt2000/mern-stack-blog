import React from "react";
import { Container, Navbar, NavbarToggler,Collapse, Nav } from "reactstrap";
import { Link } from "react-router-dom";


const AppNavbar = () => {
  return (
    <>
      <Navbar color="dark" expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            Side Project's Blog(기선 블로그)
          </Link>
          <NavbarToggler />
          <Collapse isOpen={ true } navbar>
            <Nav className='ml-auto d-felx justify-content-around' navbar> 
              { false ? (
                 <h1 className="text-white">authLink</h1>
               ) : ( 
                 <h1 className="text-white">guestLink</h1>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
