import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Header_lg from '../components/header/header_test';
import Footer from '../components/footer/footer';
import Col from 'react-bootstrap/Col';
import Header from '../components/header/header';
import {getUser} from "../services/auth.service";

const PhD = props => {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const user = getUser()
        if (user) {
            setCurrentUser(user)
        }

    }, [])
    const[phdname, setPhdname] = useState("");
    const[phdbio, setPhdbio] = useState("");
    const[phdresearch, setPhdresearch] = useState("");
    const[Phdfilename, setPhdfilename] = useState("");
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:4000/phd/${id}`)
        .then(res => [
            setPhdfilename(res.data.phdimage),
            setPhdname(res.data.phdname),
            setPhdbio(res.data.phdbio),
            setPhdresearch(res.data.phdresearch)
        ])
        .catch(error => console.log(error))
    }, [props])
    const deleteData = id => {
        axios.delete(`http://localhost:4000/phd/${id}`).then((res) => {
            window.location.reload()
        })
    }

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    
    return(
        <div className='page_total'>
        <Col className="d-none d-xxl-block d-xl-block">
            <Header />
        </Col>
        <Col className="d-xl-none d-block">
            <Header_lg />
        </Col>
        <body className='body'>
        <div className='current_link'><Link to='/' className="active_link" > Home </Link> /<Link to='/phd' className="active_link" > Phd student list</Link> / {phdname}</div>
        <div className='single_body'>
        <h2>{phdname}</h2>
            <img className = "singleImg" src={`http://localhost:4000/static/${Phdfilename}`} alt="..."/>

           
            
            <div>{phdbio}</div>
            <div>{phdresearch}</div>

			<div className='wrapper'>
            <Link to='/phd'><button className='back'>Back</button></Link>
                <div>
                    {
                        currentUser &&
                        <Link to={{pathname: `/phd/update/${id}`}}><button className='single_edit'>Edit</button></Link>
                    }
                </div>
                <div>
                    {
                        currentUser &&
                        <Link to='/phd'><button className='single_delete' onClick={() => deleteData(id)}>Delete</button></Link>
                    }
                </div>
                </div>
                </div>
            </body>
            <div><Footer /></div>
        </div>
    )
}

export default PhD;