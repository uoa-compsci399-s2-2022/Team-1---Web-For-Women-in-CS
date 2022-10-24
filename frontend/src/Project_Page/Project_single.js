import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Header from '../components/header/header';
import Header_lg from '../components/header/header_test';
import Footer from '../components/footer/footer';
import Card1 from '../components/component/Card1';
import { Space } from "antd";
import "./Project_single.css";
import {getUser} from "../services/auth.service";



const ProjectSingle = props => {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const user = getUser()
        if (user) {
            setCurrentUser(user)
        }

    }, [])
    const [projecttitle, setProjecttitle] = useState("");
    const [projectauthor, setProjectauthor] = useState("");
    const [projectdate, setProjectdate] = useState("");
    const [projectcontent, setProjectcontent] = useState("");
    const [projectsupervisor, setProjectsupervisor] = useState("");
    const { id } = useParams(); 
    useEffect(() => {
        axios.get(`http://localhost:4000/projects/${id}`)
            .then(res => [
                setProjecttitle(res.data.projecttitle),
                setProjectauthor(res.data.projectauthor),
                setProjectdate(res.data.projectdate),
                setProjectcontent(res.data.projectcontent),
                setProjectsupervisor(res.data.projectsupervisor)
            ])
            .catch(error => console.log(error))
    }, [props])
    const deleteData = id => {
        axios.delete(`http://localhost:4000/projects/${id}`).then((res) => {
            window.location.reload()
        })
    }

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return (
        <div className='page_total'>
            <Col className="d-none d-xxl-block d-xl-block">
                <Header />
            </Col>
            <Col className="d-xl-none d-block">
                <Header_lg />
            </Col>
            <body className='body'>
                <div className='home_body1'>
                

                



                <div>
                <div className='current_link'><Link to='/' className="active_link" > Home </Link> /<Link to='/projects' className="active_link" > Projects</Link> / {projecttitle}</div>
                    <div className='single_body'>
                    <div className='title_p1'>{projecttitle}</div>
    
                        <div className='project1_text'>by {projectauthor} | {projectdate}  | Supervisor: {projectsupervisor}</div>
                    
                    <p1 className='project_content'>{projectcontent}</p1>
                    
                    
                    <br /> <br /> <br />
                    <Card1 />  
       

                    <div className='wrapper'>
                    <Link to='/projects'><button className='back'>Back</button></Link>
                    <div>

                        {
                            currentUser &&
                            <Link to={{pathname: `/projects/update/${id}`}}><button className='single_edit'>Edit</button></Link>
                        }
                    </div>
                    <div>
                        {
                            currentUser &&
                            <Link to='/projects'><button className='single_delete' onClick={() => deleteData(id)}>Delete</button></Link>
                        }
                    </div>
                    </div>
                    
                    </div>
                </div>
                </div>
            </body>
            <div><Footer /></div>
        </div>



    )
}

export default ProjectSingle;