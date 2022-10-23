import "./Gallery.css";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import React, { useState, useEffect } from 'react';
import Collection from '../components/component/collection';
import Galleryppt from "../components/component/Gallery_ppt";
import axios from 'axios';
import Popup from "../components/Popup/Popup";
import Col from 'react-bootstrap/Col';
import Header_lg from '../components/header/header_test';
import {getUser} from "../services/auth.service";



function Gallery() {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const user = getUser()
        if (user) {
            setCurrentUser(user)
        }

    }, [])
    const [postgallery, setGallery] = useState([])
    const [Galleryfilename, setGalleryfilename] = useState("");
    const onChangeFile = (e) => {
        console.log(e)
        setGalleryfilename(e.target.files[0]);
    }
    const postData = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const formData = new FormData();
        formData.append("galleryimage", Galleryfilename);

        axios.post("http://localhost:4000/gallery/add", formData).then((res) => {
            window.location.reload()
        })
    }
    const deleteData = id => {
        axios.delete(`http://localhost:4000/gallery/${id}`).then((res) => {
            window.location.reload()
        })
    }

    useEffect(() => {
        axios.get("http://localhost:4000/gallery")
            .then(res => setGallery(res.data))
            .catch(error => console.log(error))
    }, [])
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    var set_num_start = 9;
    var set_num_end = 18;

    function show_set(i){
    if(i==0){
        set_num_start = 0;
        set_num_end = 9;
    }else if(i==1){
        set_num_start+=9;
        set_num_end+=9;
    }
    console.log(set_num_start);
    }
    function show_function(){
    var card_content = document.getElementsByClassName("project_photo");
    var card_button = document.getElementById("gallery_card_show_more_button1_id");
    var card_length = document.getElementsByClassName("project_photo").length;

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
        <div>
            <div className='page_total'>
                <Col className="d-none d-xxl-block d-xl-block">
                    <Header />
                </Col>
                <Col className="d-xl-none d-block">
                    <Header_lg />
                </Col>
                <div className="gallery-ppt"><Galleryppt /></div>

                <div className='gallery_body'>
                    <div className='gallery_body1'>

   
                        <div>
                            {
                                currentUser &&
                                <button onClick={togglePopup} className='add'>Add</button>
                            }
                            <div>
                                {isOpen && <Popup
                                    handleClose={togglePopup}
                                    content={
                                        <div>
                                            <div className="pop_title">
                                                Add New Photo
                                            </div>
                                            <form encType='multipart/form-data' className="news_card_body">
                                                <p className="news_card_text_align_center row">
                                                    <label htmlFor='file' className="col-12">
                                                        <h6 className="pop_sub_titles">Choose Photo</h6>
                                                    <input type='file' filename='galleryimage' onChange={onChangeFile} className="gallery_img_input"></input></label>
                                                </p>
                                                <br />
                                                <div className="gallery_popup_button">
                                                    <button onClick={(e) => postData(e)} className="pop_submit">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    } />}
                            </div>
                        </div>
                       
                        <div className="gallery_main">
                        <section className="gallery_padding">
                            <div className="gallery_grid">
                                {postgallery.map((gallery, key) => (
                                            <div key={key} className='project_photo'> 
                                                <Collection src={`http://localhost:4000/static/${gallery.galleryimage}`} />
                                                {
                                                    currentUser &&
                                                    <button onClick={() => deleteData(gallery._id)} className='gallery_delete'>Delete</button>
                                                }        
                                            </div>
                               
                      
                                ))}
                            </div>
                        </section>
                        </div>
                          
                       
                        <div className="gallery_card_show_more_button1" id="gallery_card_show_more_button1_id" onClick={show_function}>
              <button className="gallery_card_show_more_button">Show More</button>
            </div>
                        <div><Footer /></div>
                    </div>

                </div>
            </div>
            </div>
            );
}

            export default Gallery;