import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./header_test.css";
import UoA_logo_header from '../../img/UoA_Logo_header.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getUser, logout } from "../../services/auth.service";
import React from 'react';

//-------------------------
//------------------------
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));


function OffcanvasExample() {

  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const user = getUser()
    if (user) {
      setCurrentUser(user)
    }

  }, [])

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className='header_lg_total'>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <div>
              <Navbar.Toggle className='header_lg_menu'/>
              <div className='header_lg_menu_word'>MENU</div>
            </div>
            <div className='header_lg_img'>
              <Link to ='/'>
                <img src={UoA_logo_header} alt="uoa_logo" className="uoa_header_lg_logo"/>
              </Link>
            </div>
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className='Offcanvas_total'
            >
              <Offcanvas.Header closeButton className='offcanvas-header'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="header_lg_title">
                  Main Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='Offcanvas_body'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/projects">
                    <div className='header_lg_nav_list'>
                      <div className="header_botton_top ">Ko ta māatau rangāhau</div>
                      <div className="header_botton_down ">Our research</div>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="/staff">
                    <div className='header_lg_nav_list'>
                      <div className="header_botton_top">Te rarangi kaimāhi</div>
                      <div className="header_botton_down">Staff list</div>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="/phd">
                    <div className='header_lg_nav_list'>
                      <div className="header_botton_top">Te rarangi akongā PhD</div>
                      <div className="header_botton_down">PhD student list</div>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="/news">
                    <div className='header_lg_nav_list'>
                      <div className="header_botton_top">Rongorongo</div>
                      <div className="header_botton_down">News</div>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="/events">
                    <div className='header_lg_nav_list'>
                      <div className="header_botton_top">Ngā huihuingā</div>
                      <div className="header_botton_down">Events</div>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="/resources">
                    <div className='header_lg_nav_list'>
                      <div className="header_botton_top">Rauemi</div>
                      <div className="header_botton_down">Resources</div>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="/gallery">
                    <div className='header_lg_nav_list'>
                      <div className="header_botton_top">Taiwhangā</div>
                      <div className="header_botton_down">Gallery</div>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="/contact">
                    <div className='header_lg_nav_list'>
                      <div className="header_botton_top">Whakapā mai</div>
                      <div className="header_botton_down">Contact Us</div>
                    </div>
                  </Nav.Link>

                  {
                    !currentUser ? (
                      <Nav.Link href='/login'>
                        <div className='header_lg_nav_list'>
                          <div className="header_botton_top">Takiuru</div>
                          <div className="header_botton_down">Login</div>
                        </div>
                      </Nav.Link>
                    ) :
                      <div className='header_lg_nav_list'>
                        <div className="header_botton_top">Takiputa</div>
                        <div onClick={handleLogout} as={CustomToggle} className="header_botton_down">Logout</div>
                      </div>
                  }             
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>


            <div className='header_lg_search_function'>
              
            </div>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default OffcanvasExample;