import "./footer.css"
import { RiFacebookFill } from 'react-icons/ri';
import { RiTwitterFill } from 'react-icons/ri';
import { FaYoutube } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import { RiLinkedinFill } from 'react-icons/ri';
import { FiMoreHorizontal } from 'react-icons/fi';
import UoA_footer_img from  '../../img/UoA_footer_img.jpeg';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';


function Footer(){
  const divStyle = {
    textDecoration: 'none', color: 'white'
  }
  return (
    <div className="footer">
      <div className="footer_bgc">
      
        <Col className="d-none d-xxl-block d-xl-block">
          <div className="footer_display_xl">
            <div className="connect_info">
            <div className="connect_small_info">
        <div className="icon_info" style = {divStyle}>Connect with us</div>
        <div className="icons">
            <a href = 'https://www.facebook.com/UniofAkl' className="footer_icon_facebook">
            <RiFacebookFill /></a>
            <a href = 'https://twitter.com/AucklandUni' className="footer_icon">
            <RiTwitterFill /></a>
            <a href = 'https://www.youtube.com/user/UNIofAUCKLAND' className="footer_icon">
            <FaYoutube className="footer_icon"/></a>
            <a href = 'https://www.linkedin.com/school/the-university-of-auckland/' className="footer_icon">
            <RiLinkedinFill className="footer_icon"/></a>
            <a href = 'https://www.instagram.com/universityofauckland/' className="footer_icon">
            <TiSocialInstagram className="footer_icon"/></a>
            <a href = 'https://www.auckland.ac.nz/en/about-us/connect-with-us/social-media-links.html' className="footer_icon">
            <FiMoreHorizontal className="footer_icon"/></a>
        </div>
            </div>
            </div>
            <div className="bottom_info">
              <div className="bottom_list">
                <div className="bottom_list_1">
                  <li><Link to='/' style = {divStyle}>Home</Link></li>
                  <li><Link to='/news' style = {divStyle}>News</Link></li>
                  <li><Link to='/events' style = {divStyle}>Events</Link></li>
                  <li><Link to='/projects' style = {divStyle}>Research projects</Link></li>
                  <li><Link to='/staff' style = {divStyle}>Staff list</Link></li>
                  <li><Link to='/phd' style = {divStyle}>PhD student list</Link></li>
                </div>
                <div className="bottom_list_2">
                  <li><Link to='/gallery' style = {divStyle}>Gallery</Link></li>
                  <li><Link to='/contact' style = {divStyle}>Contact us</Link></li>
           
                  <li> <a href='https://uoa.custhelp.com/?_ga=2.104798144.1374964701.1660571012-2106171598.1658810019&_gac=1.87609706.1660640106.Cj0KCQjwgO2XBhCaARIsANrW2X3QajxkTCQrZfLuFhuUAaiQJvpxGM9mGP1ZUUwew_cqGLa4l5_B3mEaAnK0EALw_wcB' style = {divStyle}>
                    Ask Auckland
                    </a></li>
                  <li><Link to ='/resources' style = {divStyle}>Resources</Link></li>
                </div>
              </div>
              <img src={UoA_footer_img} alt="uoa_img" className="UoA_footer_img"/>
            </div>
            <div className="small_list">
              <div className="copyright1">
                Copyright © The University of Auckland
              </div>
              <div className="copyright3">
                <div className="copyright"> 
                  <a href = 'https://www.auckland.ac.nz/en/accessibility.html' style={divStyle}> Accessibility</a>
                </div>
                <div className="copyright4">|</div>
                <div className="copyright"><a href = 'https://www.auckland.ac.nz/en/copyright.html' style={divStyle}>Copyright</a></div>
                <div className="copyright4">|</div>
                  <div className="copyright"><a href = 'https://www.auckland.ac.nz/en/privacy.html' style={divStyle}>Privacy</a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="d-none d-xl-none d-lg-block">
          <div className="footer_display_lg">
            <div className="connect_info_lg">
              <div className="connect_small_info">
                <div className="icon_info" style = {divStyle}>Connect with us</div>
                <div className="icons">
                    <a href = 'https://www.facebook.com/UniofAkl' className="footer_icon_facebook">
                    <RiFacebookFill /></a>
                    <a href = 'https://twitter.com/AucklandUni' className="footer_icon">
                    <RiTwitterFill /></a>
                    <a href = 'https://www.youtube.com/user/UNIofAUCKLAND' className="footer_icon">
                    <FaYoutube className="footer_icon"/></a>
                    <a href = 'https://www.linkedin.com/school/the-university-of-auckland/' className="footer_icon">
                    <RiLinkedinFill className="footer_icon"/></a>
                    <a href = 'https://www.instagram.com/universityofauckland/' className="footer_icon">
                    <TiSocialInstagram className="footer_icon"/></a>
                    <a href = 'https://www.auckland.ac.nz/en/about-us/connect-with-us/social-media-links.html' className="footer_icon">
                    <FiMoreHorizontal className="footer_icon"/></a>
                </div>
              </div>
            </div>
            <div className="bottom_info_lg">
              <div className="bottom_list">
                <div className="bottom_list_1">
                  <li><Link to='/' style = {divStyle}>Home</Link></li>
                  <li><Link to='/news' style = {divStyle}>News</Link></li>
                  <li><Link to='/events' style = {divStyle}>Events</Link></li>
                  <li><Link to='/projects' style = {divStyle}>Research projects</Link></li>
                  <li><Link to='/staff' style = {divStyle}>Staff list</Link></li>
                  <li><Link to='/phd' style = {divStyle}>PhD student list</Link></li>
                </div>
                <div className="bottom_list_2">
                  <li><Link to='/gallery' style = {divStyle}>Gallery</Link></li>
                  <li><Link to='/contact' style = {divStyle}>Contact us</Link></li>
                  
                  <li> <a href='https://uoa.custhelp.com/?_ga=2.104798144.1374964701.1660571012-2106171598.1658810019&_gac=1.87609706.1660640106.Cj0KCQjwgO2XBhCaARIsANrW2X3QajxkTCQrZfLuFhuUAaiQJvpxGM9mGP1ZUUwew_cqGLa4l5_B3mEaAnK0EALw_wcB' style = {divStyle}>
                    Ask Auckland
                    </a></li>
                  <li><Link to ='/resources' style = {divStyle}>Resources</Link></li>
                </div>
              </div>
              <img src={UoA_footer_img} alt="uoa_img" className="UoA_footer_img"/>
            </div>
            <div className="small_list_lg">
              <div className="copyright1">
                Copyright © The University of Auckland
              </div>
              <div className="copyright3">
                <div className="copyright"> 
                  <a href = 'https://www.auckland.ac.nz/en/accessibility.html' style={divStyle}> Accessibility</a>
                </div>
                <div className="copyright4">|</div>
                <div className="copyright"><a href = 'https://www.auckland.ac.nz/en/copyright.html' style={divStyle}>Copyright</a></div>
                <div className="copyright4">|</div>
                  <div className="copyright"><a href = 'https://www.auckland.ac.nz/en/privacy.html' style={divStyle}>Privacy</a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="d-none d-lg-none d-md-block">
          <div className="footer_display_md">
            <div className="connect_info_md">
              <div className="connect_small_info">
                <div className="icon_info" style = {divStyle}>Connect with us</div>
                <div className="icons">
                    <a href = 'https://www.facebook.com/UniofAkl' className="footer_icon_facebook">
                    <RiFacebookFill /></a>
                    <a href = 'https://twitter.com/AucklandUni' className="footer_icon">
                    <RiTwitterFill /></a>
                    <a href = 'https://www.youtube.com/user/UNIofAUCKLAND' className="footer_icon">
                    <FaYoutube className="footer_icon"/></a>
                    <a href = 'https://www.linkedin.com/school/the-university-of-auckland/' className="footer_icon">
                    <RiLinkedinFill className="footer_icon"/></a>
                    <a href = 'https://www.instagram.com/universityofauckland/' className="footer_icon">
                    <TiSocialInstagram className="footer_icon"/></a>
                    <a href = 'https://www.auckland.ac.nz/en/about-us/connect-with-us/social-media-links.html' className="footer_icon">
                    <FiMoreHorizontal className="footer_icon"/></a>
                </div>
              </div>
            </div>
            <div className="bottom_info_md">
              <div className="bottom_list">
                <div className="bottom_list_1_md">
                  <li><Link to='/' style = {divStyle}>Home</Link></li>
                  <li><Link to='/news' style = {divStyle}>News</Link></li>
                  <li><Link to='/events' style = {divStyle}>Events</Link></li>
                  <li><Link to='/projects' style = {divStyle}>Research projects</Link></li>
                  <li><Link to='/staff' style = {divStyle}>Staff list</Link></li>
                  <li><Link to='/phd' style = {divStyle}>PhD student list</Link></li>
                </div>
                <div className="bottom_list_2_md">
                  <li><Link to='/gallery' style = {divStyle}>Gallery</Link></li>
                  <li><Link to='/contact' style = {divStyle}>Contact us</Link></li>
                  
                  <li> <a href='https://uoa.custhelp.com/?_ga=2.104798144.1374964701.1660571012-2106171598.1658810019&_gac=1.87609706.1660640106.Cj0KCQjwgO2XBhCaARIsANrW2X3QajxkTCQrZfLuFhuUAaiQJvpxGM9mGP1ZUUwew_cqGLa4l5_B3mEaAnK0EALw_wcB' style = {divStyle}>
                    Ask Auckland
                    </a></li>
                  <li><Link to ='/resources' style = {divStyle}>Resources</Link></li>
                </div>
              </div>
              <img src={UoA_footer_img} alt="uoa_img" className="UoA_footer_img_md"/>
            </div>
            <div className="small_list_md">
              <div className="copyright1">
                Copyright © The University of Auckland
              </div>
              <div className="copyright3">
                <div className="copyright"> 
                  <a href = 'https://www.auckland.ac.nz/en/accessibility.html' style={divStyle}> Accessibility</a>
                </div>
                <div className="copyright4">|</div>
                <div className="copyright"><a href = 'https://www.auckland.ac.nz/en/copyright.html' style={divStyle}>Copyright</a></div>
                <div className="copyright4">|</div>
                  <div className="copyright"><a href = 'https://www.auckland.ac.nz/en/privacy.html' style={divStyle}>Privacy</a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="d-none d-md-none d-sm-block">
          <div className="footer_display_sm">
            <div className="connect_info_sm">
              <div className="connect_small_info_sm">
                <div className="icon_info" style = {divStyle}>Connect with us</div>
                <div className="icons">
                    <a href = 'https://www.facebook.com/UniofAkl' className="footer_icon_facebook">
                    <RiFacebookFill /></a>
                    <a href = 'https://twitter.com/AucklandUni' className="footer_icon">
                    <RiTwitterFill /></a>
                    <a href = 'https://www.youtube.com/user/UNIofAUCKLAND' className="footer_icon">
                    <FaYoutube className="footer_icon"/></a>
                    <a href = 'https://www.linkedin.com/school/the-university-of-auckland/' className="footer_icon">
                    <RiLinkedinFill className="footer_icon"/></a>
                    <a href = 'https://www.instagram.com/universityofauckland/' className="footer_icon">
                    <TiSocialInstagram className="footer_icon"/></a>
                    <a href = 'https://www.auckland.ac.nz/en/about-us/connect-with-us/social-media-links.html' className="footer_icon">
                    <FiMoreHorizontal className="footer_icon"/></a>
                </div>
              </div>
            </div>
            <div className="bottom_info_sm">
              <div className="bottom_list_sm">
                <div className="bottom_list_1_sm">
                  <li><Link to='/' style = {divStyle}>Home</Link></li>
                  <li><Link to='/news' style = {divStyle}>News</Link></li>
                  <li><Link to='/events' style = {divStyle}>Events</Link></li>
                  <li><Link to='/projects' style = {divStyle}>Research projects</Link></li>
                  <li><Link to='/staff' style = {divStyle}>Staff list</Link></li>
                  <li><Link to='/phd' style = {divStyle}>PhD student list</Link></li>
                </div>
                <div className="bottom_list_2_sm">
                  <li><Link to='/gallery' style = {divStyle}>Gallery</Link></li>
                  <li><Link to='/contact' style = {divStyle}>Contact us</Link></li>
                  
                  <li> <a href='https://uoa.custhelp.com/?_ga=2.104798144.1374964701.1660571012-2106171598.1658810019&_gac=1.87609706.1660640106.Cj0KCQjwgO2XBhCaARIsANrW2X3QajxkTCQrZfLuFhuUAaiQJvpxGM9mGP1ZUUwew_cqGLa4l5_B3mEaAnK0EALw_wcB' style = {divStyle}>
                    Ask Auckland
                    </a></li>
                  <li><Link to ='/resources' style = {divStyle}>Resources</Link></li>
                </div>
              </div>
              <div className="UoA_footer_img_sm_1">
                <img src={UoA_footer_img} alt="uoa_img" className="UoA_footer_img_sm"/>
              </div>
              
            </div>
            <div className="small_list_sm">
              <div className="copyright1_sm">
                Copyright © The University of Auckland
              </div>
              
                <div className="copyright_sm1"> 
                  <a href = 'https://www.auckland.ac.nz/en/accessibility.html' style={divStyle}> Accessibility</a>
                </div>
                <div className="copyright4_sm">|</div>
                <div className="copyright_sm"><a href = 'https://www.auckland.ac.nz/en/copyright.html' style={divStyle}>Copyright</a></div>
                <div className="copyright4_sm">|</div>
                  <div className="copyright_sm"><a href = 'https://www.auckland.ac.nz/en/privacy.html' style={divStyle}>Privacy</a>
                </div>
              
            </div>
          </div>
        </Col>
        <Col className="d-sm-none d-block">
          <div className="footer_display_xs">
            <div className="connect_info_xs">
              <div className="connect_small_info_xs">
                <div className="icon_info_xs" style = {divStyle}>Connect with us</div>
                <div className="icons_xs">
                    <a href = 'https://www.facebook.com/UniofAkl' className="footer_icon_facebook_xs">
                    <RiFacebookFill /></a>
                    <a href = 'https://twitter.com/AucklandUni' className="footer_icon_xs">
                    <RiTwitterFill /></a>
                    <a href = 'https://www.youtube.com/user/UNIofAUCKLAND' className="footer_icon_xs">
                    <FaYoutube className="footer_icon_xs"/></a>
                    <a href = 'https://www.linkedin.com/school/the-university-of-auckland/' className="footer_icon_xs">
                    <RiLinkedinFill className="footer_icon_xs"/></a>
                    <a href = 'https://www.instagram.com/universityofauckland/' className="footer_icon_xs">
                    <TiSocialInstagram className="footer_icon_xs"/></a>
                    <a href = 'https://www.auckland.ac.nz/en/about-us/connect-with-us/social-media-links.html' className="footer_icon_xs">
                    <FiMoreHorizontal className="footer_icon_xs"/></a>
                </div>
              </div>
            </div>
            <div className="bottom_info_xs">
              <div className="bottom_list_xs">
                <div className="bottom_list_1_xs">
                  <li><Link to='/' style = {divStyle}>Home</Link></li>
                  <li><Link to='/news' style = {divStyle}>News</Link></li>
                  <li><Link to='/events' style = {divStyle}>Events</Link></li>
                  <li><Link to='/projects' style = {divStyle}>Research projects</Link></li>
                  <li><Link to='/staff' style = {divStyle}>Staff list</Link></li>
                  <li><Link to='/phd' style = {divStyle}>PhD student list</Link></li>
                </div>
                <div className="bottom_list_2_xs">
                  <li><Link to='/gallery' style = {divStyle}>Gallery</Link></li>
                  <li><Link to='/contact' style = {divStyle}>Contact us</Link></li>
                
                  <li> <a href='https://uoa.custhelp.com/?_ga=2.104798144.1374964701.1660571012-2106171598.1658810019&_gac=1.87609706.1660640106.Cj0KCQjwgO2XBhCaARIsANrW2X3QajxkTCQrZfLuFhuUAaiQJvpxGM9mGP1ZUUwew_cqGLa4l5_B3mEaAnK0EALw_wcB' style = {divStyle}>
                    Ask Auckland
                    </a></li>
                  <li><Link to ='/resources' style = {divStyle}>Resources</Link></li>
                </div>
              </div>
              <div className="UoA_footer_img_xs_1">
                <img src={UoA_footer_img} alt="uoa_img" className="UoA_footer_img_xs"/>
              </div>
              
            </div>
            <div className="small_list_xs">
              <div className="copyright1_xs">
                Copyright © The University of Auckland
              </div>
              
                <div className="copyright_xs1"> 
                  <a href = 'https://www.auckland.ac.nz/en/accessibility.html' style={divStyle}> Accessibility</a>
                </div>
                <div className="copyright4_xs">|</div>
                <div className="copyright_xs"><a href = 'https://www.auckland.ac.nz/en/copyright.html' style={divStyle}>Copyright</a></div>
                <div className="copyright4_xs">|</div>
                  <div className="copyright_xs"><a href = 'https://www.auckland.ac.nz/en/privacy.html' style={divStyle}>Privacy</a>
                </div>
              
            </div>
          </div>
        </Col>
      
      </div>
    </div>
        
  )
}
 
export default Footer; 
