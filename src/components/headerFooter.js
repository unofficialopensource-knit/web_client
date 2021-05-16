import React from 'react';
import { Navbar, Nav,Container,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import image from "../assets/snake-eyes.jpg"
import "./headerFooter.css"




const headerFooter = () => {
    return (
        <div >
            <header class="nav">
             
         <Navbar bg="light" variant="light" fixed="top" style={{ fontWeight: 500 }}>
           <Container fluid>
        <Navbar.Brand as={Link} to="/"><img src={image} width="100%"alt=""/></Navbar.Brand>
        <Button variant="danger" size="sm">Pricing</Button>
        <Nav className="justify-content-end" variant="pills" style={{ width: "100%",fontSize:18 }}>
          <Nav.Link as={Link} to="/Login" >
            Log in
          </Nav.Link>
           <Nav.Link as={Link} to="/SignUp" >
           Sign Up
          </Nav.Link>
           </Nav>
           </Container>
      </Navbar>
            </header>
           
            <footer class="footer">

                 <Navbar bg="light" variant="light" fixed="bottom">
                   <Container fluid>
              <Nav class="container">
                <Nav.Link as={Link} to="/contact">SnakeEyes@2021</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact us </Nav.Link>
           <Nav.Link as={Link} to="/privacy">Privacy Policy</Nav.Link>
            <Nav.Link as={Link} to="/termsofservice">Terms of Service</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

            </footer>
            
        </div>
    );
};

export default headerFooter;