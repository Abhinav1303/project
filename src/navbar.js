import Navbar from 'react-bootstrap/Navbar';

import '@fontsource/roboto/300.css';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import './App.css';

import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { hasPointerEvents } from '@testing-library/user-event/dist/utils';
import { useEffect } from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { auth,provider} from './firebase_config';
import {signInWithPopup} from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate} from 'react-router-dom';




export const NavbarDefined = () => {

    // const [user] = useAuthState(auth);
    const navigate=useNavigate();

    const google_sign_in = async () => {
    
    
        const result=await(signInWithPopup(auth,provider));
        
        
        console.log(result);
        navigate('/');
      
      }
    return (
        <div>
   
   <Navbar collapseOnSelect expand="lg" className="custom">
        <Container>
          <Navbar.Brand href="/home"><img style={{height:40,width:40}} src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0840e59-db43-4681-ae7b-31a04dc4bc55/d7eqdvw-4e97ac92-e4b9-4498-9655-e4d612eb478b.png/v1/fill/w_1192,h_670/random_logo_by_criticl_d7eqdvw-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYzA4NDBlNTktZGI0My00NjgxLWFlN2ItMzFhMDRkYzRiYzU1XC9kN2VxZHZ3LTRlOTdhYzkyLWU0YjktNDQ5OC05NjU1LWU0ZDYxMmViNDc4Yi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.X991O1jF5lTNZbbEoHEfoo6nlHEihBMHMIm5-uBCXcU'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              
              <Button variant='light' onClick={google_sign_in}>Sign in with Google <Image src='https://www.techjunkie.com/wp-content/uploads/2020/11/How-to-Change-the-Google-Logo.jpg' height={50} width={50}></Image></Button>

              
              {/* { user ? (<Nav.Link eventKey={2} href="#memes">
              {user?.displayName}
              </Nav.Link>):(<Nav.Link eventKey={2} href="#memes">
              Not signed in
              </Nav.Link>)} */} 
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
      );
    
}
