import "./Events.css";
import Header from '../components/header/header';
import Header_lg from '../components/header/header_test';
import Footer from '../components/footer/footer';
import React, { useState, useEffect } from 'react';
import HeaderPpt from "../components/component/header_ppt";
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Popup from "../components/Popup/Popup";
import { getUser } from "../services/auth.service";

function Events() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const user = getUser()
    if (user) {
      setCurrentUser(user)
    }

  }, [])
  const [postevents, setEvents] = useState([])
  const [Eventsname, setEventsname] = useState("");
  const [Eventsdate, setEventsdate] = useState("");
  const [Eventscontent, setEventscontent] = useState("");
  const [Eventslocation, setEventslocation] = useState("");
  const [Eventsprice, setEventsprice] = useState("");
  const [Eventsfilename, setEventsfilename] = useState("");
  const onChangeFile = (e) => {
    console.log(e)
    setEventsfilename(e.target.files[0]);
  }
  const postData = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const formData = new FormData();
    formData.append("eventimage", Eventsfilename);
    formData.append("eventname", Eventsname);
    formData.append("eventdate", Eventsdate);
    formData.append("eventcontent", Eventscontent);
    formData.append("eventlocation", Eventslocation);
    formData.append("eventprice", Eventsprice)

    axios.post("http://localhost:4000/events/add", formData).then((res) => {
      window.location.reload()
    })
  }
  const deleteData = id => {
    axios.delete(`http://localhost:4000/events/${id}`).then((res) => {
      window.location.reload()
    })
  }

  useEffect(() => {
    axios.get("http://localhost:4000/events")
      .then(res => setEvents(res.data))
      .catch(error => console.log(error))
  }, [])
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  var set_num_start = 8;
  var set_num_end = 16;

  function show_set(i) {
    if (i == 0) {
      set_num_start = 0;
      set_num_end = 6;
    } else if (i == 1) {
      set_num_start += 8;
      set_num_end += 8;
    }
    console.log(set_num_start);
  }
  function show_function() {
    var card_content = document.getElementsByClassName("event_card");
    var card_button = document.getElementById("event_card_show_more_button1_id");
    var card_length = document.getElementsByClassName("event_card").length;

    if (set_num_start <= card_length && set_num_end >= card_length) {
      for (let i = set_num_start; i < card_length; i++) {
        card_content[i].style.display = "block";
      }
      show_set(1);

    } else {
      for (let i = set_num_start; i < set_num_end; i++) {
        card_content[i].style.display = "block";
      }
      show_set(1);
    }

    if (set_num_end - 6 >= card_length) {
      card_button.style.display = "none";
    }
  }
  return (
    <div className='page_total'>
      <Col className="d-none d-xxl-block d-xl-block">
        <Header />
      </Col>
      <Col className="d-xl-none d-block">
        <Header_lg />
      </Col>
      <div className='body'>

        <div className='current_link'><Link to='/' className="active_link" > Home</Link> /  Events</div>

        <div className='intro_title'>Events</div>
        <div className='intro_subtitle'>We host many community showcases and public lectures throughout the year for women in computer science.</div>
        <div className="line"></div>


        <div className="info_2">
          <div className="current_news_events">
            <section className="events">
              <div className="EventsAddButton">
                {
                  currentUser && (<button className='add' onClick={togglePopup}>Add</button>)
                }

                <div className='EventsPopupWindow'>
                  {isOpen && <Popup
                    handleClose={togglePopup}
                    content={
                      <div>
                        <h1 className="pop_title">Add New Event</h1>
                        <form encType='multipart/form-data' className="news_card_body">
                          <p className="news_card_text_align_center row">
                            <label htmlFor='file' className="col-12">
                              <h6 className="pop_sub_titles">Choose Event Image</h6></label>
                            <input className="col-12   news_card_img_input" type='file' filename='eventimage' onChange={onChangeFile}></input>
                          </p>

                          <p className="news_card_text_align_center row">
                            <h6 className="pop_sub_titles col-12">Event Name </h6>
                            <input className="col-12 pop_input" type="text"
                              value={Eventsname}
                              onChange={(e) => setEventsname(e.target.value)} placeholder='Entner the Name of the Event...' /></p>

                          <p className="news_card_text_align_center row">
                            <h6 className="pop_sub_titles col-12">Event Date </h6>
                            <input className="col-12 pop_input" type="text"
                              value={Eventsdate}
                              onChange={(e) => setEventsdate(e.target.value)} placeholder='Entner the date of the Event...' /></p>

                          <p className="news_card_text_align_center row">
                            <h6 className="pop_sub_titles col-12">Event Location </h6>
                            <input className="col-12 pop_input" type="text"
                              value={Eventslocation}
                              onChange={(e) => setEventslocation(e.target.value)} placeholder='Entner the Location of the Event...' /></p>

                          <p className="news_card_text_align_center row">
                            <h6 className="pop_sub_titles col-12">Event Price </h6>
                            <input className="col-12 pop_input" type="text"
                              value={Eventsprice}
                              onChange={(e) => setEventsprice(e.target.value)} placeholder='Entner the Price of the Event...' /></p>


                          <p className="news_card_text_align_center row">
                            <h6 className="pop_sub_titles col-12">Events Content</h6>
                            <textarea className="col-12 pop_content" rows="3"
                              value={Eventscontent}
                              onChange={(e) => setEventscontent(e.target.value)} placeholder='Enter News Content...' /></p>
                          <br />
                          <br />

                          <button onClick={(e) => postData(e)} className="pop_submit">Submit</button><br /><br />
                        </form>
                      </div>
                    } />}
                </div>
              </div>
              <div className="event-grid">
                {postevents.map((events, key) => (
                  <div className='event_card' key={key}>
                    <div className='event_card_img' >
                      <img src={`http://localhost:4000/static/${events.eventimage}`} alt="..." />
                    </div>
                    <Link to={{ pathname: `/events/${events._id}` }}>
                      <h3 className='events_card_title'>{events.eventname}</h3></Link>
                    <p className='events_card_time'>{events.eventdate}</p>
                    {/* <p className='events_card_info'>{events.eventcontent.substr(0,events.eventcontent.indexOf(".")+1)}</p> */}
                    <p className='events_card_info'>{events.eventlocation}</p>
                    <p className='events_card_info'>{events.eventprice}</p>
                    <div className="eventsBtn">
                      <div>
                        {
                          currentUser &&
                          <Link to={{ pathname: `/events/update/${events._id}` }}><button className="single_edit">Edit</button></Link>
                        }
                      </div>
                      <div>
                        {
                          currentUser &&
                          <button className='single_delete' onClick={() => deleteData((events._id))}>Delete</button>
                        }
                      </div>
                    </div>

                  </div>


                ))}
              </div>


            </section>
          </div>
        </div>
      </div>
      <div className="event_card_show_more_button1" id="event_card_show_more_button1_id" onClick={show_function}>
        <button className="event_card_show_more_button">Show More</button>
      </div>
      <Footer />
    </div>
  )
}

export default Events;