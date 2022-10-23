import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Header_lg from '../components/header/header_test';
import Footer from '../components/footer/footer';
import Col from 'react-bootstrap/Col';
import Header from '../components/header/header';
import {getUser} from "../services/auth.service";

const New = props => {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const user = getUser()
        if (user) {
            setCurrentUser(user)
        }

    }, [])
    const[newstitle, setNewstitle] = useState("");
    const[newsauthor, setNewsauthor] = useState("");
    const[newsdate, setNewsdate] = useState("");
    const[newscontent, setNewscontent] = useState("");
    const[Newsfilename, setNewsfilename] = useState("");
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:4000/news/${id}`)
        .then(res => [
            setNewsfilename(res.data.newsimage),
            setNewstitle(res.data.newstitle),
            setNewsauthor(res.data.newsauthor),
            setNewsdate(res.data.newsdate),
            setNewscontent(res.data.newscontent),
        ])
        .catch(error => console.log(error))
    }, [props])
    const deleteData = id => {
        axios.delete(`http://localhost:4000/news/${id}`).then((res) => {
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
        <div className='current_link'><Link to='/' className="active_link" > Home </Link> /<Link to='/news' className="active_link" > News</Link> / {newstitle}</div>
            <div className='single_body'>
            </div>
            <h2>{newstitle}</h2>
            <img className = "singleImg"  src={`http://localhost:4000/static/${Newsfilename}`} alt="..."/>
            
            <p>{newsauthor}</p>
            <span>{newsdate}</span><br/>
            <span>{newscontent}</span><br/>

			<div className='wrapper'>
            <Link to='/news'><button className='back'>Back</button></Link>
            <div>
                {
                    currentUser &&
                    <Link to={{pathname: `/news/update/${id}`}}><button className='single_edit'>Edit</button></Link>
                }
            </div>
            <div>
                {
                    currentUser &&
                    <Link to='/news'><button className='single_delete' onClick={() => deleteData(id)}>Delete</button></Link>
                }
            </div>
            <br/>
            </div>
            

            </body>
            <div><Footer /></div>
        </div>
    )
}

export default New;