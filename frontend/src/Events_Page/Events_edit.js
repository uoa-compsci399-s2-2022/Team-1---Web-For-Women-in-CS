import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/header/header';
import Header_lg from '../components/header/header_test';
import Col from 'react-bootstrap/Col';
import Footer from '../components/footer/footer';

function EventsEdit() {
    const [Eventsname, setEventsname] = useState("");
    const [Eventsdate, setEventsdate] = useState("");
    const [Eventscontent, setEventscontent] = useState("");
    const [Eventslocation, setEventslocation] = useState("");
    const [Eventsprice, setEventsprice] = useState("");
    const [Eventsfilename, setEventsfilename] = useState("");
    const { id } = useParams();
    const onChangeFile = (e) => {
        console.log(e)
        setEventsfilename(e.target.files[0]);
    }
    const updateData = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const formData = new FormData();
        formData.append("eventimage", Eventsfilename);
        formData.append("eventname", Eventsname);
        formData.append("eventdate", Eventsdate);
        formData.append("eventcontent", Eventscontent);
        formData.append("eventlocation", Eventslocation);
        formData.append("eventprice", Eventsprice)

        axios.put(`http://localhost:4000/events/update/${id}`, formData).then((res) => {
            window.location.reload()
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/events/${id}`)
            .then(res => [
                setEventsfilename(res.data.eventimage),
                setEventsname(res.data.eventname),
                setEventsdate(res.data.eventdate),
                setEventscontent(res.data.eventcontent),
                setEventslocation(res.data.eventlocation),
                setEventsprice(res.data.eventprice)
            ])
            .catch(error => console.log(error))
    }, [])

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    
    return (
        <div>
            <Col className="d-none d-xxl-block d-xl-block">
                <Header />
            </Col>
            <Col className="d-xl-none d-block">
                <Header_lg />
            </Col>
            <div className='news_card_edit_totol'>
                <h1 className='news_card_edit_title'>Edit Event</h1>
                <form encType='multipart/form-data'>
                    <h6 htmlFor='file' className='news_card_edit_each_info_title'>Choose News Image</h6>
                    <input className='news_card_edit_input' type='file' filename='newsimage' onChange={onChangeFile}></input>
                    <p className='news_card_edit_each_info'>
                        <h6 className='news_card_edit_each_info_title'>News Title</h6>
                        <input className='news_card_edit_input' type="text"
                            value={Eventsname}
                            onChange={(e) => setEventsname(e.target.value)} /></p>
                    <p className='news_card_edit_each_info'>
                        <h6 className='news_card_edit_each_info_title'>Event Date</h6>
                        <input className='news_card_edit_input' type="text"
                            value={Eventsdate}
                            onChange={(e) => setEventsdate(e.target.value)} /></p>
                     <p className='news_card_edit_each_info'>
                        <h6 className='news_card_edit_each_info_title'>Event Content </h6>
                        <textarea className='news_card_edit_content' rows="3"
                            value={Eventscontent}
                            onChange={(e) => setEventscontent(e.target.value)} /></p>
                    <p className='news_card_edit_each_info'>
                        <h6 className='news_card_edit_each_info_title'>Event Date</h6>
                        <input className='news_card_edit_input' type="text"
                            value={Eventslocation}
                            onChange={(e) => setEventslocation(e.target.value)} /></p>
                    <p className='news_card_edit_each_info'>
                        <h6 className='news_card_edit_each_info_title'>Event Price</h6>
                        <input className='news_card_edit_input' type="text"
                            value={Eventsprice}
                            onChange={(e) => setEventsprice(e.target.value)} /></p>

                    <Link to={{ pathname: `/events/${id}` }}>
                        <button onClick={(e) => updateData(e)} className='news_card_edit_button'>Edit</button></Link>
                        <Link to='/events'><button className='news_card_edit_button'>Back</button></Link>
               
                </form>

            </div>
            <Footer />
        </div>
    )
}

export default EventsEdit;