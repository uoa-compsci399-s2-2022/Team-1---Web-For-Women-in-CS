import './Project.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Card from "../components/component/Card_p";
import Popup from '../components/Popup/Popup';
import styled from "styled-components";
import Col from 'react-bootstrap/Col';
import Header_lg from '../components/header/header_test';
import { getUser } from "../services/auth.service";



function Projects() {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const user = getUser()
        if (user) {
            setCurrentUser(user)
        }

    }, [])
    const [postprojects, setProject] = useState([])
    const [Projecttitle, setProjecttitle] = useState("");
    const [Projectauthor, setProjectauthor] = useState("");
    const [Projectdate, setProjectdate] = useState("");
    const [Projectcontent, setProjectcontent] = useState("");
    const [Projectsupervisor, setProjectsupervisor] = useState("");
    const postData = () => {
        const data = {
            projecttitle: Projecttitle,
            projectauthor: Projectauthor,
            projectdate: Projectdate,
            projectcontent: Projectcontent,
            projectsupervisor: Projectsupervisor
        }
        axios.post("http://localhost:4000/projects/add", data).then((res) => {
            window.location.reload()
        })
    }
    const deleteData = id => {
        axios.delete(`http://localhost:4000/projects/${id}`).then((res) => {
            window.location.reload()
        })
    }

    useEffect(() => {
        axios.get("http://localhost:4000/projects")
            .then(res => setProject(res.data))
            .catch(error => console.log(error))
    }, [])
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    
 

var set_num_start = 6;
var set_num_end = 12;

function show_set(i){
  if(i==0){
    set_num_start = 0;
    set_num_end = 6;
  }else if(i==1){
    set_num_start+=6;
    set_num_end+=6;
  }
  console.log(set_num_start);
}
function show_function(){
  var card_content = document.getElementsByClassName("project_every_card");
  var card_button = document.getElementById("project_card_show_more_button1_id");
  var card_length = document.getElementsByClassName("project_every_card").length;

  if(set_num_start <= card_length && set_num_end >= card_length){
    for(let i=set_num_start;i<card_length;i++){
      card_content[i].style.display="block";
    }
    show_set(1);

  }else{
    for(let i=set_num_start;i<set_num_end;i++){
      card_content[i].style.display="block";
    }
    show_set(1);
  }

  if(set_num_end-6 >= card_length){
    card_button.style.display="none";
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
  
          <div className='current_link'><Link to='/' className="active_link" > Home</Link> / Research projects</div>
  
          <div className='intro_title'>Research projects</div>
          <div className='intro_subtitle'>We have many research-active staff with excellent national and international links, both to commerce and academia. Browse the links below for details of our current research areas.</div>
          <div className="line"></div>
  
                <div className="card_project">
                    <div className="ProjectAddButton">
                        {
                            currentUser &&
                            <button className='add project_add' onClick={togglePopup}>Add</button>
                        }
                        <div className='ProjectPopupWindow'>
                            {isOpen && <Popup
                                handleClose={togglePopup}
                                content={
                                    <div>
                                        <h1 className="pop_title">
                                            Add New Project Research
                                        </h1>
                                        <form encType='multipart/form-data' className="news_card_body">
                                        <p className="news_card_text_align_center row">
                                            <h6 className="pop_sub_titles col-12">Research Title</h6>
                                            <input className="col-12 pop_input"
                                                value={Projecttitle}
                                                onChange={(e) => setProjecttitle(e.target.value)} placeholder='Entner the Title of the Project...' /></p>
                                       
                                        <p className="news_card_text_align_center row">
                                            <h6 className="pop_sub_titles col-12">Research Author</h6>
                                            <input className="col-12 pop_input"
                                                value={Projectauthor}
                                                onChange={(e) => setProjectauthor(e.target.value)} placeholder='Entner the Author of the Project...' /></p>
                                       
                                        <p className="news_card_text_align_center row">
                                            <h6 className="pop_sub_titles col-12">Research Date</h6>
                                            <input className="col-12 pop_input"
                                                value={Projectdate}
                                                onChange={(e) => setProjectdate(e.target.value)}
                                                placeholder='Entner the Date...' /></p>
                                       
                                        <p className="news_card_text_align_center row">
                                            <h6 className="pop_sub_titles col-12">Research Content</h6>
                                            <textarea rows="3"
                                                value={Projectcontent}
                                                onChange={(e) => setProjectcontent(e.target.value)} placeholder='Enter the content of the Project...' /></p>
                                       
                                        <p className="news_card_text_align_center row">
                                            <h6 className="pop_sub_titles col-12">Research Supervisor</h6>
                                            <input className="col-12 pop_input"
                                                value={Projectsupervisor}
                                                onChange={(e) => setProjectsupervisor(e.target.value)}
                                                placeholder='Entner the Supervisor of the Project...' /></p><br/>
                                       
                                        <button onClick={() => postData()} className="pop_submit">Submit</button><br/><br/>
                                        </form>
                                    </div>
                                } />}
                        </div>
                    </div>
                    <section className="project-padding">
                        <div className="project-grid">
                            {postprojects.map((project, key) => (
                                
                                <div key={key}>
                                    <div className='project_every_card'>

                                    <Card
                                        title={<Link to={{ pathname: `/projects/${project._id}` }}><div className='project-card-title'>{project.projecttitle}</div></Link>}
                                        text={<div>{project.projectcontent.substr(0,project.projectcontent.indexOf(".")+1)}</div>}
                                    />
                                    <div className='btnCombo'>
                                        <div>
                                            {
                                                currentUser &&
                                                <Link to={{ pathname: `/projects/update/${project._id}` }}><button className='edit'>Edit</button></Link>
                                            }
                                        </div>
                                        <div>
                                            {
                                                currentUser &&
                                                <button className='delete' onClick={() => deleteData(project._id)}>Delete</button>
                                            }
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>






                </div>
                <div className="project_card_show_more_button1" id="project_card_show_more_button1_id" onClick={show_function}>
              <button className="project_card_show_more_button">Show More</button>
            </div>

                <div><Footer /></div>
            </div>
            </div>
            );
}


            export default Projects;