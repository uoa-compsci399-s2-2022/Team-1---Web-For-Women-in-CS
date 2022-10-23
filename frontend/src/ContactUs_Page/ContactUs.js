import "./ContactUs.css";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import React from 'react';
import { Link } from "react-router-dom";
import Form from '../msgForm/Form';
import Col from 'react-bootstrap/Col';
import Header_lg from '../components/header/header_test';



function ContactUs(){

  return(

    <div className='page_total'>
    <Col className="d-none d-xxl-block d-xl-block">
      <Header />
    </Col>
    <Col className="d-xl-none d-block">
      <Header_lg />
    </Col>
    <div className='body'>

      <div className='current_link'><Link to='/' className="active_link" > Home</Link> /  Contact us</div>

      <div className='intro_title'>Contact us</div>
      <div className='intro_subtitle'>You can contact us by phone, email, through our social media accounts, or by visiting the Student Hubs.</div>
      <div className="line"></div>

  
     
        
          <div className="contactUs_subhead">Get in touch with the University of Auckland</div>

          <p className="contactUs_subhead2">Student enquiries</p>
            <p>For all general enquiries, including admission, enrolment, and course advice queries&nbsp;
            <a href="https://uoa.custhelp.com/" className="contactUs_link">connect online</a>.</p> <br></br>
            <p>Or visit in person at the <a href="https://www.auckland.ac.nz/en/students/student-hubs.html" className="contactUs_link">Student Hubs</a>.</p><br></br>
            <p>Call us Monday to Friday, 9am - 5pm</p>
            <br></br>
            <div>
              <p className="phone"><b>Auckland: </b>(09) 923 5025</p>
              <p className="phone"><b>Outside Auckland: </b> 0800 61 62 63</p>
              <p className="phone"><b>International: </b>+64 9 373 7513</p>
            </div>
            <br/> <br/>

          <h1 className="contactUs_subhead">Say Hi to our Staff </h1>
     
          <p className="contactUs_subhead2">Asma Shakil</p>
          <p> Women in Computer Science Coordinator</p>
          <p>Email: <a href="mailto:asma.shakil@auckland.ac.nz" className="contactUs_link">asma.shakil@auckland.ac.nz</a></p>
          <br></br>



          <p className="contactUs_subhead2">Shyamli Sindhwani</p>
          <p> Women in Computer Science Deputy Coordinator</p>
          <p>Email: <a href="mailto:shyamli.sindhwani@auckland.ac.nz" className="contactUs_link">shyamli.sindhwani@auckland.ac.nz</a></p>
          
        
          <br></br>
          <p className="contactUs_subhead2">Anna Trofimova</p>
          <p>Equity Officer</p>
          <p>Email: <a href="mailto:anna.trofimova@auckland.ac.nz" className="contactUs_link">anna.trofimova@auckland.ac.nz</a></p>


          <br></br>
          <p className="contactUs_subhead2">Post</p>
          <div>
              <p>Private Bag 92019</p>
              <p>Auckland 1142</p>
              <p>New Zealand</p>
          </div>
          <br></br>
          <p className="contactUs_subhead2">Phone</p>
          <div>
              <p> 0800 61 62 63 for student enquiries from within New Zealand</p>
              <p> +64 9 373 7513 for student enquiries from outside New Zealand</p>
              <p> +64 9 373 7999 for telephone receptionists</p>
              <p> +64 9 373 7599 and the appropriate extension</p>
            </div>
          <br></br>
          <p>Fax</p>
          <p>0800 61 62 64</p>

          <Form />



      </div>

      <Footer />
    </div>
  )
}

export default ContactUs;





