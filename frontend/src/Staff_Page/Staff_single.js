import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Header_lg from '../components/header/header_test';
import Footer from '../components/footer/footer';
import Col from 'react-bootstrap/Col';
import Header from '../components/header/header';
import {getUser} from "../services/auth.service";


const Staff = props => {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const user = getUser()
        if (user) {
            setCurrentUser(user)
        }

    }, [])
    const[staffname, setStaffname] = useState("");
    const[stafffaculty, setStafffaculty] = useState("");
    const[staffrole, setStaffrole] = useState("");
    const[staffintro, setStaffintro] = useState("");
    const[staffemail, setStaffemail] = useState("");
    const[Stafffilename, setStafffilename] = useState("");
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:4000/staff/${id}`)
        .then(res => [
            setStafffilename(res.data.staffimage),
            setStaffname(res.data.staffname),
            setStafffaculty(res.data.stafffaculty),
            setStaffrole(res.data.staffrole),
            setStaffintro(res.data.staffintro),
            setStaffemail(res.data.staffemail)
        ])
        .catch(error => console.log(error))
    }, [props])
    const deleteData = id => {
        axios.delete(`http://localhost:4000/staff/${id}`).then((res) => {
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
        <div className='current_link'><Link to='/' className="active_link" > Home </Link> /<Link to='/Staff' className="active_link" > Staff list</Link> / {staffname}</div>
        <div className = 'single_body'>
        <h2>{staffname}</h2>
            <img className ="singleImg" src={`http://localhost:4000/static/${Stafffilename}`} alt="..."/>
            
            <p>{stafffaculty}</p>
            <p>{staffrole}</p>
            <span>{staffintro}</span><br/><br/>

            <p className='emailtext'>Email: <a href={`mailto:${staffemail}`}className="emailLink">{staffemail}</a></p>

 
			<div className='wrapper'>
           <Link to='/staff'><button className='back'>Back</button></Link>
               <div>
                   {
                       currentUser &&
                       <Link to={{pathname: `/staff/update/${id}`}}><button className='single_edit'>Edit</button></Link>
                   }
               </div>
               <div>
                   {
                       currentUser &&
                       <Link to='/staff'><button className='single_delete' onClick={() => deleteData(id)}>Delete</button></Link>
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

export default Staff;
