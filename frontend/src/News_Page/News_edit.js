import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import "./News_edit.css";
import Header from '../components/header/header';
import Header_lg from '../components/header/header_test';
import Col from 'react-bootstrap/Col';
import Footer from '../components/footer/footer';
 
function NewsEdit(){
    const[Newstitle, setNewstitle] = useState("");
    const[Newsauthor, setNewsauthor] = useState("");
    const[Newsdate, setNewsdate] = useState("");
    const[Newscontent, setNewscontent] = useState("");
    const[Newsfilename, setNewsfilename] = useState("");
    const {id} = useParams();
    const onChangeFile = (e) => {
        console.log(e)
        setNewsfilename(e.target.files[0]);
    }
    const updateData = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const formData = new FormData();
        formData.append("newsimage", Newsfilename);
        formData.append("newstitle", Newstitle);
        formData.append("newsauthor", Newsauthor);
        formData.append("newsdate", Newsdate);
        formData.append("newscontent", Newscontent);

        axios.put(`http://localhost:4000/news/update/${id}`, formData).then((res) => {
            window.location.reload()
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/news/${id}`)
        .then(res => [
            setNewsfilename(res.data.newsimage),
            setNewstitle(res.data.newstitle),
            setNewsauthor(res.data.newsauthor),
            setNewsdate(res.data.newsdate),
            setNewscontent(res.data.newscontent)
        ])
        .catch(error => console.log(error))
    }, [])

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    
    return(
        <div>
            <Col className="d-none d-xxl-block d-xl-block">
        <Header />
      </Col>
      <Col className="d-xl-none d-block">
        <Header_lg />
      </Col>
      <div className='news_card_edit_totol'>
            <h1 className='news_card_edit_title'>Edit News</h1>
            <form encType='multipart/form-data'>
                <h6 htmlFor='file' className='news_card_edit_each_info_title'>Choose News Image</h6>
                <input className='news_card_edit_input' type = 'file' filename = 'newsimage' onChange = {onChangeFile}></input>

                <p className='news_card_edit_each_info'>
                <h6 className='news_card_edit_each_info_title'>News Title</h6>
                <input className='news_card_edit_input' type = "text" 
                value={Newstitle}
                onChange={(e) => setNewstitle(e.target.value)}/></p>

                <p className='news_card_edit_each_info'>
                <h6 className='news_card_edit_each_info_title'>News Author</h6>
                <input className='news_card_edit_input' type = "text" 
                value={Newsauthor}
                onChange={(e) => setNewsauthor(e.target.value)}/></p>

                <p className='news_card_edit_each_info'>
                <h6 className='news_card_edit_each_info_title'>News Date </h6>
                <input className='news_card_edit_input' type = "text" 
                value={Newsdate}
                onChange={(e) => setNewsdate(e.target.value)}/></p>

                <p className='news_card_edit_each_info'>
                <h6 className='news_card_edit_each_info_title'>News Content </h6>
                <textarea className='news_card_edit_content' rows="3" 
                value={Newscontent}
                onChange={(e) => setNewscontent(e.target.value)}/></p>
                

                <Link to = {{pathname: `/news/${id}`}}><button onClick = {(e) => updateData(e)} className='news_card_edit_button'>Save</button></Link>
                <Link to = '/news'><button className='news_card_edit_button'>Back</button></Link>
                
            </form>
            </div>
            <Footer />
        </div>
    )
}

export default NewsEdit;