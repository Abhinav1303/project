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

// export const ExampleCarouselImage= (props) => {
//   return (
//     <Carousel.Item>
//       <img
//         className="d-block w-100"
//         src={props.imageSrc}
//         alt="Carousel Slide"
//       />
//       <Carousel.Caption>
//         <h3>{props.text}</h3>
//       </Carousel.Caption>
//     </Carousel.Item>
//   );
// }


export const Loader= () => {
  return(
    // <h1 className='header'>Loading</h1>
    // <Container className='outermost'>
    // <Container className='outer'>
    //   <Container className='ring'></Container>
    //   <Container className='ring'></Container>
    //   <Container className='ring'></Container>
    // </Container>
    // </Container>
    <h1>Loading...</h1>
    
  )
}
export const Homepage= () =>{
  const [loading,setLoading]=useState(false);
  useEffect(()=> {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)

    },1000);
  },[]);
  return (
    
    
      <div>

<MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>



      

{/* <Carousel>
      {<ExampleCarouselImage
        imageSrc="https://plus.unsplash.com/premium_photo-1676057875510-f73d9d5950e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3869&q=80"
        text="First slide"
      />}
      {<ExampleCarouselImage
        imageSrc="https://plus.unsplash.com/premium_photo-1676057875510-f73d9d5950e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3869&q=80"
        text="Second slide"
      />}
      {<ExampleCarouselImage
        imageSrc="https://plus.unsplash.com/premium_photo-1676057875510-f73d9d5950e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3869&q=80"
        text="Third slide"
      />}
    </Carousel> */}






<Container className=" custom-bg col-xxl-8 px-4 py-5">
      <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
        <Col xs={10} sm={8} lg={6}>
          <Image src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
        </Col>
        <Col lg={6}>
          <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
          <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Button variant="primary" size="lg" className="px-4 me-md-2">Primary</Button>
            <Button variant="outline-secondary" size="lg" className="px-4">Default</Button>
          </div>
        </Col>
      </Row>
    </Container>










      <header className='custom-header'>
       <div className='page-header'>
         <span className='mask'>
 
 
         </span>
         <Container>
           <Row className='rw'>
             <Col className='col' xs={8}>
               <h1 className='heading'>Work with an Amazing Design</h1>
               <><Button className='custom-btn' variant="outline-info">Info</Button>{' '}</>
               
               
               
 
             </Col>
           </Row>
 
         </Container>
 
       </div>
      </header>
      <><Button className='custom-btn' variant="outline-info">Info</Button>{' '}</>


      
      
 
     
     
     
     
   
   
           
         
         
       
       
       </div>
    
    
  
    
  )
}

 
export const Features = () => {
  return <div><h1>Here is the features</h1></div>
}


function App() {
  const [loading,setLoading]=useState(false);
  useEffect(()=> {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)

    },5000);
  },[]);

  return (
    <div className='App'>
      { loading ? (<Loader/>) : (<Router>
        
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
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
          <Routes>
            <Route path='/home' element={<Homepage />}/>
            <Route path='/features' element={<Features />} />
            
          </Routes>
        </Router>)
      }
      

      
    
    
    

    
    
      

    
    
    
    
    </div>
    


  );
}

export default App;
