import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import React from 'react';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Header_lg from '../components/header/header_test';

function Resources(){
  return(
      <div>
      <Col className="d-none d-xxl-block d-xl-block">
        <Header/>
      </Col>
      <Col className="d-xl-none d-block">
        <Header_lg/>
      </Col>
      
      <div className='body'>
      <div className='current_link'><Link to='/' className="active_link" > Home</Link> / Resources</div>
          

          <div>
          
          <div className='intro_title'> Resources</div>
          <div className='subtitle_p'>Women in Science and equity-oriented links, both within the University of Auckland and externally.</div> 
          <div className="line"/>
          </div>

          <div className="contactUs_subhead">General Resources</div>
          
          <li>
          <a href="http://www.womeninstem.co.nz/technology.html" className="extra_res">Sharing Session from the Senior Women in Computer Science</a>
          </li><br/>
          <li>
          <a href="https://www.auckland.ac.nz/en/study/scholarships-and-awards/scholarship-types/scholarships-for-women2.html" className="extra_res">
            Scholarships for Women</a>
          </li><br/>
          <li>
          <a href="http://wwhttps://www.auckland.ac.nz/en/study/scholarships-and-awards/find-a-scholarship/nicola-crowley-memorial-scholarship-for-women-in-computer-science-997-sci.html" className="extra_res">
          Nicola Crowley Memorial Scholarship for Women in Computer Science</a>
          </li><br/>
          <li>
          <a href="https://www.gcsb.govt.nz/working-for-us/gcsb-women-in-stem-scholarship/" className="extra_res">
          GCSB Women in STEM Scholarship</a>
          </li><br/>
          <li>
          <a href="https://shesharp.org.nz/?fbclid=IwAR0nFOOm1-Dgbg2FuPtcleFzcO3TS5g6DS10ClUXMWu5fsHetBBPK9VGyt4" className="extra_res">
            She Sharp</a>
          </li><br/>
          <li>
          <a href="https://www.facebook.com/groups/UOA.WINCS/" className="extra_res">
            Win CS Facebook</a>
          </li><br/>

            <br></br>
        


          
          
      
          
          </div>

       

      <Footer />
    </div>
  )
}

export default Resources;