import Navbar from 'react-bootstrap/Navbar';
import {SignInSide} from './login-form'

import '@fontsource/roboto/300.css';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Axios from 'axios';


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
import {auth, db} from './firebase_config';


import {useNavigate} from 'react-router-dom';

import {NavbarDefined} from './navbar'
import {addDoc,collection} from 'firebase/firestore';
import {getDocs} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import {query,where} from 'firebase/firestore';




  


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
  // const [loading,setLoading]=useState(false);
  // useEffect(()=> {
  //   setLoading(true);
  //   setTimeout(()=>{
  //     setLoading(false)

  //   },1000);
  // },[]);
 
  const reference=collection(db,"posts");
  const data={
    title:"First Post",
    description: "This is my first post",
    username:"user.displayName",
    id:"user.uid"

  }
  const addPost = () => {
    addDoc(reference,{
      Title:data.title,
      Description:data.description,
      Username:'user?.displayName',
      post_id:'3'
    })

  }
  const [postsList,setPosts]=useState(null);
  const reference_2=collection(db,'posts');

  const getPosts= async() => {
    const data_returned=await getDocs(reference_2);
    setPosts(data_returned.docs.map((doc) => (
      {...doc.data(),post_id:doc.id}

    )));
    
    
  }
 
  

  const [likes,setLikes]= useState(0);
  const getLikes = (postId) => {
    const likesRef=collection(db,'likes');
    const likesDoc=query(likesRef,where('postid','==',postId));
    const getDocuments = async() => {
      const  result=await getDocs(likesDoc);
      let list_of_likes=result.docs.map((doc) => (
        {...doc.data()}
  
      ));
      console.log(list_of_likes);
      setLikes(list_of_likes.length);
    }
    getDocuments();


  }
  const [userListReact,setUserList]= useState([]);
  useEffect(()=> {
    getPosts();
    getLikes('6S8IleNGTUcGxy6vYXxi');
    Axios.get("http://127.0.0.1:5001/getdata").then((res)=> {
      console.log(res.data)
      

    });
    },[])
  const dataSubmitted= () => {
    console.log()
  }

  return (
    
    
    
    
      <div>
        {<SignInSide />}
        <Button onClick={addPost} variant='success'>Add a post</Button>
        {postsList && postsList.map((each_post) => {return (<><p>{each_post.Title}</p>
      {likes && <p>Likes:{likes}</p>}</>)})}

      {/* <p>Users are:</p>
      {userList && userList.map((each_user) => {
        return (<><p>{each_user.id}</p>
        <p>{each_user.email}</p>)</>
        
      })} */}
      
        

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
  
  
  
  
  // const [loading,setLoading]=useState(false);
  // useEffect(()=> {
  //   setLoading(true);
  //   setTimeout(()=>{
  //     setLoading(false)

  //   },5000);
  // },[]);
  
  // 

  return (
    <div className='App'>
      
        <Router>
          {<NavbarDefined />}
        
          <Routes>
            <Route path='/home' element={<Homepage />}/>
            <Route path='/features' element={<Features />} />
            
          </Routes>
        </Router>
      
      

      
    
    
    

    
    
      

    
    
    
    
    </div>
    


  );
}

export default App;
