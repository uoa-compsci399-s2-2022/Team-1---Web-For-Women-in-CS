import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Popup from "../components/Popup/Popup";
import Col from 'react-bootstrap/Col';
import Header_lg from '../components/header/header_test';
import {getUser} from "../services/auth.service";

function Phds(){
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const user = getUser()
        if (user) {
            setCurrentUser(user)
        }

    }, [])
    const[postphd, setPhd] = useState([])
    const[Phdname, setPhdname] = useState("");
    const[Phdbio, setPhdbio] = useState("");
    const[Phdresearch, setPhdresearch] = useState("");
    const[Phdfilename, setPhdfilename] = useState("");
    const onChangeFile = (e) => {
        console.log(e)
        setPhdfilename(e.target.files[0]);
    }
    const postData = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const formData = new FormData();
        formData.append("phdimage", Phdfilename);
        formData.append("phdname", Phdname);
        formData.append("phdbio", Phdbio);
        formData.append("phdresearch", Phdresearch);

        axios.post("http://localhost:4000/phd/add", formData).then((res) => {
            window.location.reload()
        })
    }
    const deleteData = id => {
        axios.delete(`http://localhost:4000/phd/${id}`).then((res) => {
            window.location.reload()
        })
    }
    
    useEffect(() => {
    axios.get("http://localhost:4000/phd")
    .then(res => setPhd(res.data))
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
        return(
            <div className='page_total'>
        <Col className="d-none d-xxl-block d-xl-block">
          <Header />
        </Col>
        <Col className="d-xl-none d-block">
          <Header_lg />
        </Col>
        <div className='body'>
  
          <div className='current_link'><Link to='/' className="active_link" > Home</Link> / PhD students list</div>
  
          <div className='intro_title'>Doctoral candidates</div>
          <div className='intro_subtitle'>Meet doctoral candidates and graduates from across the University.</div>
          <div className="line"></div>


                    <section className="padding">
                    <div className="PhDAddButton">
                  {
                      currentUser &&
                      <button className='add' onClick={togglePopup}>Add</button>
                   }
                        <div className='PhDPopupWindow'>
                            {isOpen && <Popup 
                            handleClose = {togglePopup}
                            content={
                                <div>
                                    <h1 className="pop_title">Add New PhD Student</h1>
                                    <form encType='multipart/form-data' className="news_card_body">
                                    <p className="news_card_text_align_center row">
                                    <label htmlFor='file' className="col-12">
                                    <h6 className="pop_sub_titles">Choose Student Photo</h6></label>
                                    <input className="col-12   news_card_img_input" type='file' filename='phdimage' onChange={onChangeFile}></input>
                                    </p>
        
                                    <p className="news_card_text_align_center row">
                                    <h6 className="pop_sub_titles col-12">Student Name </h6>
                                    <input className="col-12 pop_input" type="text"
                                    value={Phdname}
                                    onChange={(e) => setPhdname(e.target.value)} placeholder='Entner the Name of the Student...' /></p>
        
                                    <p className="news_card_text_align_center row">
                                    <h6 className="pop_sub_titles col-12">Student Bio</h6>
                                    <textarea className="col-12 pop_content" rows="3"
                                    value={Phdbio}
                                    onChange={(e) => setPhdbio(e.target.value)} placeholder='Enter Bio of the Student...' /></p>
        
                                    <p className="news_card_text_align_center row">
                                    <h6 className="pop_sub_titles col-12">Student Research </h6>
                                    <textarea className="col-12 pop_content" rows="3"
                                    value={Phdresearch}
                                    onChange={(e) => setPhdresearch(e.target.value)} placeholder='Enter the Research Project...' /></p>
                                    <br/>
        
        
                                    <button onClick={(e) => postData(e)} className="pop_submit">Submit</button><br/><br/>
                               
        
                                </form>
                  </div>
                } />}
        
        
                        </div>
                    </div>
            <div className="grid">                 
    
            {postphd.map((phd, key) => (
                <div className='items card_border' key = {key}>
                    <img className='card_img' src={`http://localhost:4000/static/${phd.phdimage}`} alt="..."/>
                    
                    <div className='details'>
                    <h2>{phd.phdname}</h2>
                    <p1 className='bio_'>{phd.phdbio.substr(0,125)+"..."}</p1>
                    <br/>
                    <Link to={{ pathname: `/phd/${phd._id}` }} className='readmore'>Read More</Link>
                    <br/>
                    <div className="card_wrapper">
                        <div>
                            {
                                currentUser &&
                                <Link to={{ pathname: `/phd/update/${phd._id}` }}><button className='single_edit'>Edit</button></Link>
                            }
                        </div>
                        <div>
                            {
                                currentUser &&
                                <button className='single_delete' onClick={() => deleteData((phd._id))}>Delete</button>
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

export default Phds;