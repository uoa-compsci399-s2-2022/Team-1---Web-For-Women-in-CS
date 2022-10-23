import './Projects_edit.css';
import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import Header from '../components/header/header';
import Header_lg from '../components/header/header_test';
import Col from 'react-bootstrap/Col';
import Footer from '../components/footer/footer';

function ProjectsEdit(){
    const[Projecttitle, setProjecttitle] = useState("");
    const[Projectauthor, setProjectauthor] = useState("");
    const[Projectdate, setProjectdate] = useState("");
    const[Projectcontent, setProjectcontent] = useState("");
    const[Projectsupervisor, setProjectsupervisor] = useState("");
    const {id} = useParams();
    const updateData = () => {
        const data = {
            projecttitle: Projecttitle,
            projectauthor: Projectauthor,
            projectdate: Projectdate,
            projectcontent: Projectcontent,
            projectsupervisor: Projectsupervisor
        }
        axios.put(`http://localhost:4000/projects/update/${id}`, data).then((res) => {
            window.location.reload()
        })
    }

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
    }, [])
    return(
        <div>
        <Col className="d-none d-xxl-block d-xl-block">
        <Header />
        </Col>
        <Col className="d-xl-none d-block">
        <Header_lg />
        </Col> 


        <div className='news_card_edit_totol'>
            <h1 className='news_card_edit_title'>Edit Project Research</h1>
            <form encType='multipart/form-data'>
 
            <div className='news_card_edit_each_info'>
            <p className='news_card_edit_each_info_title'>
            <h6 className='news_card_edit_each_info_title'>Research Title</h6> 
            <input className='news_card_edit_input' type = "text" 
            value={Projecttitle}
            onChange={(e) => setProjecttitle(e.target.value)}/></p>

            <p className='news_card_edit_each_info'>
            <h6 className='news_card_edit_each_info_title'>Research Author</h6>
            <input className='news_card_edit_input' type = "text" 
            value={Projectauthor}
            onChange={(e) => setProjectauthor(e.target.value)}/></p>

            <p className='news_card_edit_each_info'>
            <h6 className='news_card_edit_each_info_title'>Research Date </h6>
            <input className='news_card_edit_input' type = "text" 
            value={Projectdate}
            onChange={(e) => setProjectdate(e.target.value)}/></p>

            <p className='news_card_edit_each_info'>
            <h6 className='news_card_edit_each_info_title'>Research Content </h6>   
            <textarea className='news_card_edit_content' rows="3" 
            value={Projectcontent}
            onChange={(e) => setProjectcontent(e.target.value)}/></p>

            <p className='news_card_edit_each_info'>
            <h6 className='news_card_edit_each_info_title'>Research Supervisor </h6>
            <input className='news_card_edit_input' type = "text" 
            value={Projectsupervisor}
            onChange={(e) => setProjectsupervisor(e.target.value)}/></p>
            
            
            <Link to = {{pathname: `/projects/${id}`}}><button onClick = {(e) => updateData(e)}className='news_card_edit_button'>Save</button></Link>           
            <Link to = {{pathname: `/projects/${id}`}}><button className='news_card_edit_button'>Back</button></Link>
            
           </div>
           </form>
           </div>
        <Footer />

        </div>
    )
}

export default ProjectsEdit;