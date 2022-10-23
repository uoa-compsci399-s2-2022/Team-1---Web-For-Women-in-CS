import "./Staff.css";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Popup from "../components/Popup/Popup";
import Col from 'react-bootstrap/Col';
import Header_lg from '../components/header/header_test';
import {getUser} from "../services/auth.service";


function Staffs() {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const user = getUser()
        if (user) {
            setCurrentUser(user)
        }

    }, [])
    const [poststaff, setStaff] = useState([])
    const [Staffname, setStaffname] = useState("");
    const [Stafffaculty, setStafffaculty] = useState("");
    const [Staffrole, setStaffrole] = useState("");
    const [Staffintro, setStaffintro] = useState("");
    const [Staffemail, setStaffemail] = useState("");
    const [Stafffilename, setStafffilename] = useState("");
    const onChangeFile = (e) => {
        console.log(e)
        setStafffilename(e.target.files[0]);
    }
    const postData = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const formData = new FormData();
        formData.append("staffimage", Stafffilename);
        formData.append("staffname", Staffname);
        formData.append("stafffaculty", Stafffaculty);
        formData.append("staffrole", Staffrole);
        formData.append("staffintro", Staffintro);
        formData.append("staffemail", Staffemail);

        axios.post("http://localhost:4000/staff/add", formData).then((res) => {
            window.location.reload()
        })
    }
    const deleteData = id => {
        axios.delete(`http://localhost:4000/staff/${id}`).then((res) => {
            window.location.reload()
        })
    }

    useEffect(() => {
        axios.get("http://localhost:4000/staff")
            .then(res => setStaff(res.data))
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
    var card_content = document.getElementsByClassName("items");
    var card_button = document.getElementById("staff_card_show_more_button1_id");
    var card_length = document.getElementsByClassName("items").length;

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
  
          <div className='current_link'><Link to='/' className="active_link" > Home</Link> / Staff list</div>
  
          <div className='intro_title'>Our staff</div>
          <div className='intro_subtitle'>Connect with other women in our faculty, access support and information, build networks with individuals and organisations working to promote women in science.</div>
          <div className="line"></div>

                    <section className="padding">
                    <div className="StaffAddButton">
                       {
                           currentUser &&
                           <button className='add' onClick={togglePopup}>Add</button>
                       }
                        <div className='StaffPopupWindow'>
                            {isOpen && <Popup
                                handleClose={togglePopup}
                                content={
                                    <div>
                                        <h1 className="pop_title">Add New Staff</h1>
                                        <form encType='multipart/form-data' className="news_card_body">
                                        <p className="news_card_text_align_center row">
                                        <label htmlFor='file' className="col-12">
                                        <h6 className="pop_sub_titles">Choose Staff Photo</h6></label>
                                        <input className="col-12   news_card_img_input" type='file' filename='staffimage' onChange={onChangeFile}></input>
                                        </p>

                                        <p className="news_card_text_align_center row">
                                        <h6 className="pop_sub_titles col-12">Staff Name </h6>
                                        <input className="col-12 pop_input" type="text"
                                        value={Staffname}
                                        onChange={(e) => setStaffname(e.target.value)} placeholder='Entner the Name of the Staff...' /></p>

                                        <p className="news_card_text_align_center row">
                                        <h6 className="pop_sub_titles col-12">Staff Faculty </h6>
                                        <input className="col-12 pop_input" type="text"
                                        value={Stafffaculty}
                                        onChange={(e) => setStafffaculty(e.target.value)} placeholder='Entner the Faculty of the Staff...' /></p>

                                        <p className="news_card_text_align_center row">
                                        <h6 className="pop_sub_titles col-12">Staff Role </h6>
                                        <input className="col-12 pop_input" type="text"
                                        value={Staffrole}
                                        onChange={(e) => setStaffrole(e.target.value)} placeholder='Entner the Role of the Staff...' /></p>


                                        <p className="news_card_text_align_center row">
                                        <h6 className="pop_sub_titles col-12">Staff Email </h6>
                                        <input className="col-12 pop_input" type="text"
                                        value={Staffemail}
                                        onChange={(e) => setStaffemail(e.target.value)} placeholder='Enter the Email of the Staff...' /></p>

                                        <p className="news_card_text_align_center row">
                                        <h6 className="pop_sub_titles col-12">Staff Introduction</h6>
                                        <textarea className="col-12 pop_content" rows="3"
                                        value={Staffintro}
                                        onChange={(e) => setStaffintro(e.target.value)} placeholder='Enter the Intro of the Staff...' /></p>
                                        <br/>

                                        <button onClick={(e) => postData(e)} className="pop_submit">Submit</button><br/><br/>
                                   
      
                                    </form>
                      </div>
                    } />}
                        </div>
                    </div>
                        <div className="grid">
                            {poststaff.map((staff, key) => (
                                <div className='items card_border' key={key}>

                                    <div>
                                        <img className='card_img' src={`http://localhost:4000/static/${staff.staffimage}`} alt="..." />
                                    </div>

                                
                                    <div className='details'>
                                        <h2>{staff.staffname}</h2>
                                        <p>{staff.stafffaculty}</p>
                                        <p>{staff.staffrole}</p>
                                        <p1>{staff.staffintro.substr(0,80)+"..."}</p1>
                                        <br/>
                                        <Link to={{ pathname: `/staff/${staff._id}` }} className='readmore'>Read More</Link>
										<div className="card_wrapper">
                                            <div>
                                                {
                                                    currentUser &&
                                                    <Link to={{ pathname: `/staff/update/${staff._id}` }}><button className='single_edit'>Edit</button></Link>
                                                }
                                            </div>
                                            <div>
                                                {
                                                    currentUser &&
                                                    <button className='single_delete' onClick={() => deleteData((staff._id))}>Delete</button>
                                                }
                                            </div>

                                        
                                    
                                    </div>
                                   
                                    
                                    </div>
                                    </div>
                            

                            ))}
                        </div>
                    </section> 
            


                </div>
            
                <div className="staff_card_show_more_button1" id="staff_card_show_more_button1_id" onClick={show_function}>
              <button className="staff_card_show_more_button">Show More</button>
            </div>
            <Footer />
        </div>
    )
}

export default Staffs;