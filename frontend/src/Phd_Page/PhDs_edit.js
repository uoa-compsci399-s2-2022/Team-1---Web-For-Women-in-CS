import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import Header from '../components/header/header';
import Header_lg from '../components/header/header_test';
import Col from 'react-bootstrap/Col';
import Footer from '../components/footer/footer';

function PhDEdit(){
    const[Phdname, setPhdname] = useState("");
    const[Phdbio, setPhdbio] = useState("");
    const[Phdresearch, setPhdresearch] = useState("");
    const[Phdfilename, setPhdfilename] = useState("");
    const {id} = useParams();
    const onChangeFile = (e) => {
        console.log(e)
        setPhdfilename(e.target.files[0]);
    }
    const updateData = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const formData = new FormData();
        formData.append("phdimage", Phdfilename);
        formData.append("phdname", Phdname);
        formData.append("phdbio", Phdbio);
        formData.append("phdresearch", Phdresearch);

        axios.put(`http://localhost:4000/phd/update/${id}`, formData).then((res) => {
            window.location.reload()
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/phd/${id}`)
        .then(res => [
            setPhdfilename(res.data.phdimage),
            setPhdname(res.data.phdname),
            setPhdbio(res.data.phdbio),
            setPhdresearch(res.data.phdresearch)
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
            <h1 className='news_card_edit_title'> Edit PhD Student</h1>
            <form encType='multipart/form-data'>
                <h6 htmlFor='file' className='news_card_edit_each_info_title'>Choose Student Photo</h6>
                <input className='news_card_edit_input' type = 'file' filename = 'phdimage' onChange = {onChangeFile}></input>

                <p className='news_card_edit_each_info'>
                    <h6 className='news_card_edit_each_info_title'>Student Name</h6>
                <input className='news_card_edit_input' type = "text" 
                value={Phdname}
                onChange={(e) => setPhdname(e.target.value)}/></p>

                <p className='news_card_edit_each_info'>
                    <h6 className='news_card_edit_each_info_title'>Student Bio</h6>
                    <textarea className='news_card_edit_content' rows="3" 
                value={Phdbio}
                onChange={(e) => setPhdbio(e.target.value)}/></p>

                <p className='news_card_edit_each_info'>
                    <h6 className='news_card_edit_each_info_title'>Student Research</h6>
                    <textarea className='news_card_edit_content' rows="3" 
                value={Phdresearch}
                onChange={(e) => setPhdresearch(e.target.value)}/></p>
                

                <Link to = {{pathname: `/phd/${id}`}}><button onClick = {(e) => updateData(e)} className='news_card_edit_button'>Save</button></Link>
                
                <Link to = {{pathname: `/phd/${id}`}}><button className='news_card_edit_button'>Back</button></Link>

            </form>
            
        </div>

        <Footer />
        </div>
    )
}

export default PhDEdit;