import "./News.css";
import React, { useState, useEffect } from 'react';
import Header from '../components/header/header';
import Header_lg from '../components/header/header_test';
import axios from 'axios';
import Footer from '../components/footer/footer';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Popup from "../components/Popup/Popup";
import { getUser } from "../services/auth.service";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function News() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const user = getUser()
    if (user) {
      setCurrentUser(user)
    }

  }, [])
  const [postnews, setNews] = useState([])
  const [Newstitle, setNewstitle] = useState("");
  const [Newsauthor, setNewsauthor] = useState("");
  const [Newsdate, setNewsdate] = useState("");
  const [Newscontent, setNewscontent] = useState("");
  const [Newsfilename, setNewsfilename] = useState("");
  const onChangeFile = (e) => {
    console.log(e)
    setNewsfilename(e.target.files[0]);
  }
  const handleChange= (html)=> {
    setNewscontent(html);
}


  const postData = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const formData = new FormData();
    formData.append("newsimage", Newsfilename);
    formData.append("newstitle", Newstitle);
    formData.append("newsauthor", Newsauthor);
    formData.append("newsdate", Newsdate);
    formData.append("newscontent", Newscontent);

    axios.post("http://localhost:4000/news/add", formData).then((res) => {
      window.location.reload()
    })
  }



  const deleteData = id => {
    axios.delete(`http://localhost:4000/news/${id}`).then((res) => {
      window.location.reload()
    })
  }

  useEffect(() => {
    axios.get("http://localhost:4000/news")
      .then(res => setNews(res.data))
      .catch(error => console.log(error))
  }, [])
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


  var set_num_start = 6;
  var set_num_end = 12;

  function show_set(i) {
    if (i == 0) {
      set_num_start = 0;
      set_num_end = 6;
    } else if (i == 1) {
      set_num_start += 6;
      set_num_end += 6;
    }
    console.log(set_num_start);
  }
  function show_function() {
    var card_content = document.getElementsByClassName("news_card1");
    var card_button = document.getElementById("news_card_show_more_button1_id");
    var card_length = document.getElementsByClassName("news_card1").length;

    if (set_num_start <= card_length && set_num_end >= card_length) {
      for (let i = set_num_start; i < card_length; i++) {
        card_content[i].style.display = "block";
      }
      show_set(1);

    } else {
      for (let i = set_num_start; i < set_num_end; i++) {
        card_content[i].style.display = "block";
      }
      show_set(1);
    }

    if (set_num_end - 6 >= card_length) {
      card_button.style.display = "none";
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

        <div className='current_link'><Link to='/' className="active_link" > Home</Link> /  News</div>

        <div className='intro_title'>News</div>
        <div className='intro_subtitle'>The latest news, stories, and opinion pieces from our faculty and community for women in science.</div>
        <div className="line"></div>


        <section className="news_padding">
          <div className="NewsAddButton">
            {
              currentUser &&
              <button className="add" onClick={togglePopup}>Add</button>
            }
            <div className='NewsPopupWindow'>
              {isOpen && <Popup
                handleClose={togglePopup}
                content={
                  <div>
                    <h1 className="pop_title">Create News</h1>
                    <form encType='multipart/form-data' className="news_card_body">
                      <p className="news_card_text_align_center row">
                        <label htmlFor='file' className="col-12">
                          <h6 className="pop_sub_titles">Choose News Image</h6></label>
                        <input className="col-12   news_card_img_input" type='file' filename='newsimage' onChange={onChangeFile}></input>
                      </p>
                      <p className="news_card_text_align_center row">
                        <h6 className="pop_sub_titles col-12">News Title </h6>
                        <input className="col-12 pop_input" type="text"
                          value={Newstitle}
                          onChange={(e) => setNewstitle(e.target.value)} placeholder='Entner the Title of the News...' /></p>
                      <p className="news_card_text_align_center row">
                        <h6 className="pop_sub_titles col-12">News Author</h6>
                        <input className="col-12 pop_input" type="text"
                          value={Newsauthor}
                          onChange={(e) => setNewsauthor(e.target.value)} placeholder='Entner the Author of the News...' /></p>
                      <p className="news_card_text_align_center row">
                        <h6 className="pop_sub_titles col-12">News Date</h6>
                        <input className="col-12 pop_input" type="text"
                          value={Newsdate}
                          onChange={(e) => setNewsdate(e.target.value)} placeholder='Entner the Date...' /></p>
                      
                      
                      <p className="news_card_text_align_center row">
                                        <h6 className="pop_sub_titles col-12">News Content</h6>
                                        <textarea className="col-12 pop_content" rows="3"
                                        value={Newscontent}
                                        onChange={(e) => setNewscontent(e.target.value)} placeholder='Enter News Content...' /></p>
                                        <br/>
                      

                      <br />
                      <button onClick={(e) => postData(e)} className="pop_submit">Submit</button><br /><br />

                    </form>
                  </div>
                } />}
            </div>
          </div>
          <div className="news_grid">
            {postnews.map((news, key) => (
              <div className='news_card1' key={key}>
                <img className='news_img' src={`http://localhost:4000/static/${news.newsimage}`} alt="..." />
                <Link to={{ pathname: `/news/${news._id}` }}><div className='news_card_title'>{news.newstitle}</div></Link>
                <div className='news_card_time'>{news.newsdate}</div>
                <div className='news_card_info'>{news.newscontent.substr(0, news.newscontent.indexOf(".")+1)}</div>
                <div className="newsBtn">
                  <div>
                    {
                      currentUser &&
                      <Link to={{ pathname: `/news/update/${news._id}` }}><button className="single_edit">Edit</button></Link>
                    }
                  </div>
                  <div>
                    {
                      currentUser &&
                      <button className='single_delete' onClick={() => deleteData((news._id))}>Delete</button>
                    }
                  </div>
                </div>

              </div>
            ))}

          </div>
        </section>
        
      </div>
      <div className="news_card_show_more_button1" id="news_card_show_more_button1_id" onClick={show_function}>
        <button className="news_card_show_more_button">Show More</button>
      </div>
      <Footer />
    </div>

  )
}

export default News;