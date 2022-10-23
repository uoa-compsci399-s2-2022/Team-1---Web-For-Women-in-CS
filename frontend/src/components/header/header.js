import "./header.css"
import UoA_logo_header from '../../img/UoA_Logo_header.png';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, logout } from "../../services/auth.service";
import { useNavigate } from "react-router";
import React from 'react'

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
 
function Header() {
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

  setTimeout(function show_function() {
    var card_content = document.getElementsByClassName("news_card1");
    var card_button = document.getElementById("news_card_show_more_button1_id");
    var card_length = document.getElementsByClassName("news_card1").length;

    if (card_length <= 6) {
      card_button.style.display = "none";
      for (let i = 0; i < card_length; i++) {
        card_content[i].style.display = "block";
      }
    } else {
      for (let i = 0; i < 6; i++) {
        card_content[i].style.display = "block";
      }
    }
  }, 500);

  setTimeout(function show_function() {
    var card_content = document.getElementsByClassName("event_card");
    var card_button = document.getElementById("event_card_show_more_button1_id");
    var card_length = document.getElementsByClassName("event_card").length;

    if (card_length <= 8) {
      card_button.style.display = "none";
      for (let i = 0; i < card_length; i++) {
        card_content[i].style.display = "block";
      }
    } else {
      for (let i = 0; i < 8; i++) {
        card_content[i].style.display = "block";
      }
    }
  }, 500);

  setTimeout(function show_function() {
    var card_content = document.getElementsByClassName("project_photo");
    var card_button = document.getElementById("gallery_card_show_more_button1_id");
    var card_length = document.getElementsByClassName("project_photo").length;

    if (card_length <= 9) {
      card_button.style.display = "none";
      for (let i = 0; i < card_length; i++) {
        card_content[i].style.display = "block";
      }
    } else {
      for (let i = 0; i < 9; i++) {
        card_content[i].style.display = "block";
      }
    }
  }, 500);

  setTimeout(function show_function() {
    var card_content = document.getElementsByClassName("items");
    var card_button = document.getElementById("staff_card_show_more_button1_id");
    var card_length = document.getElementsByClassName("items").length;

    if (card_length <= 6) {
      card_button.style.display = "none";
      for (let i = 0; i < card_length; i++) {
        card_content[i].style.display = "block";
      }
    } else {
      for (let i = 0; i < 6; i++) {
        card_content[i].style.display = "block";
      }
    }
  }, 500);

  setTimeout(function show_function() {
    var card_content = document.getElementsByClassName("project_every_card");
    var card_button = document.getElementById("project_card_show_more_button1_id");
    var card_length = document.getElementsByClassName("project_every_card").length;

    if (card_length <= 6) {
      card_button.style.display = "none";
      for (let i = 0; i < card_length; i++) {
        card_content[i].style.display = "block";
      }
    } else {
      for (let i = 0; i < 6; i++) {
        card_content[i].style.display = "block";
      }
    }
  }, 500);

  function reload() {
    console.log("123")
    window.location.reload();
  }

  return (
    <div className="header_body">

      <div className="top_bgc"></div>
      <div className="header" onClick={reload}>
        <div className="header1">
          <Link to='/'>
            <img src={UoA_logo_header} alt="uoa_logo" className="uoa_header_logo" />
          </Link>
          
          <div className="total_botton">
            <div>
              <Link to='/' className="header_botton">
                <div className="header_botton_top">Kaingā</div>
                <div className="header_botton_down">Home</div>
              </Link>
              <Link to='/projects' className="header_botton">
                <div className="header_botton_top">Ko ta māatau rangāhau</div>
                <div className="header_botton_down">Research projects</div>
              </Link>
              <Link to='/staff' className="header_botton">
                <div className="header_botton_top">Te rarangi kaimāhi</div>
                <div className="header_botton_down">Staff list</div>
              </Link>
              <Link to='/phd' className="header_botton">
                <div className="header_botton_top">Te rarangi akongā PhD</div>
                <div className="header_botton_down">PhD students list</div>
              </Link>
              {
                !currentUser ? (
                  <Link to='/login' className="header_botton">
                    <div className="header_botton_top">Takiuru</div>
                    <div className="header_botton_down" s> Login</div>
                  </Link>
                ) :
                  <div className='header_botton'>
                    <div className="header_botton_top">Takiputa</div>
                    <div onClick={handleLogout} as={CustomToggle} className="header_botton_down">Logout</div>
                  </div>
              }
            </div>

            <div className="header_bottom_list">
              <Link to='/news' className="header_botton2">
                <div className="header_botton_top" onClick={setTimeout}>Rongorongo</div>
                <div className="header_botton_down" onClick={setTimeout}>News</div>
              </Link>
              <Link to='/events' className="header_botton1">
                <div className="header_botton_top">Ngā huihuingā</div>
                <div className="header_botton_down">Events</div>
              </Link>
              <Link to='/resources' className="header_botton1">
                <div className="header_botton_top">Rauemi</div>
                <div className="header_botton_down">Resources</div>
              </Link>
              <Link to='/gallery' className="header_botton1">
                <div className="header_botton_top">Taiwhangā</div>
                <div className="header_botton_down">Gallery</div>
              </Link>
              <Link to='/contact' className="header_botton1">
                <div className="header_botton_top">Whakapā mai</div>
                <div className="header_botton_down">Contact us</div>
              </Link>


            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;
