import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Header_lg from '../components/header/header_test';
import Footer from '../components/footer/footer';
import Col from 'react-bootstrap/Col';
import Header from '../components/header/header';
import {getUser} from "../services/auth.service";

const Event = props => {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const user = getUser()
        if (user) {
            setCurrentUser(user)
        }

    }, [])
    const[eventsname, setEventsname] = useState("");
    const[eventsdate, setEventsdate] = useState("");
    const[eventscontent, setEventscontent] = useState("");
    const[eventslocation, setEventslocation] = useState("");
    const[eventsprice, setEventsprice] = useState("");
    const[Eventsfilename, setEventsfilename] = useState("");
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:4000/events/${id}`)
        .then(res => [
            setEventsfilename(res.data.eventimage),
            setEventsname(res.data.eventname),
            setEventsdate(res.data.eventdate),
            setEventscontent(res.data.eventcontent),
            setEventslocation(res.data.eventlocation),
            setEventsprice(res.date.eventprice)
        ])
        .catch(error => console.log(error))
    }, [props])
    const deleteData = id => {
        axios.delete(`http://localhost:4000/events/${id}`).then((res) => {
            window.location.reload()
        })
    }
    
    return(
        <div className='page_total'>
        <Col className="d-none d-xxl-block d-xl-block">
            <Header />
        </Col>
        <Col className="d-xl-none d-block">
            <Header_lg />
        </Col>
        <body className='body'>
        <div className='current_link'><Link to='/' className="active_link" > Home </Link> /<Link to='/events' className="active_link" > Events</Link> / {eventsname}</div>
        <div className='single_body'>
    
            <h2>{eventsname}</h2>
            <img className ="singleImg" src={`http://localhost:4000/static/${Eventsfilename}`} alt="..."/>
            
            <p>{eventsdate}</p><br/>
            <p1>{eventscontent}</p1><br/><br/>
            <p1>{eventslocation}</p1><br/>
            <div className='wrapper'>
            <Link to='/events'><button className='back'>Back</button></Link>

                <div>
                    {
                        currentUser &&
                        <Link to={{pathname: `/events/update/${id}`}}><button className='single_edit'>Edit</button></Link>
                    }
                
                </div>
                <div>
                    {
                        currentUser &&
                        <Link to='/events'><button className='single_delete' onClick={() => deleteData(id)}>Delete</button></Link>
                    }
                </div>
                <br/>
            </div>



           
            </div>
        </body>
     
     <div><Footer /></div>
 </div>
)
}

export default Event;