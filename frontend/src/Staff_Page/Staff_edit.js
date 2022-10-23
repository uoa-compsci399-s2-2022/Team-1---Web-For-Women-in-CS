import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import Header from '../components/header/header';
import Header_lg from '../components/header/header_test';
import Col from 'react-bootstrap/Col';
import Footer from '../components/footer/footer';


function StaffEdit(){
    const[Staffname, setStaffname] = useState("");
    const[Stafffaculty, setStafffaculty] = useState("");
    const[Staffrole, setStaffrole] = useState("");
    const[Staffintro, setStaffintro] = useState("");
    const[Staffemail, setStaffemail] = useState("");
    const[Stafffilename, setStafffilename] = useState("");
    const {id} = useParams();
    const onChangeFile = (e) => {
        console.log(e)
        setStafffilename(e.target.files[0]);
    }
    const updateData = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const formData = new FormData();
        formData.append("staffimage", Stafffilename);
        formData.append("staffname", Staffname);
        formData.append("stafffaculty", Stafffaculty);
        formData.append("staffrole", Staffrole);
        formData.append("staffintro", Staffintro);
        formData.append("staffemail", Staffemail);

        axios.put(`http://localhost:4000/staff/update/${id}`, formData).then((res) => {
            window.location.reload()
        })
    }

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
            <h1 className='news_card_edit_title'>Edit Staff</h1>
            <form encType='multipart/form-data'>
                <h6 htmlFor='file' className='news_card_edit_each_info_title'>Choose Staff Photo</h6>
                <input className='news_card_edit_input' type = 'file' filename = 'staffimage' onChange = {onChangeFile}></input>

                <p className='news_card_edit_each_info'>
                <h6 className='news_card_edit_each_info_title'>Staff Name</h6>
                <input className='news_card_edit_input' type = "text" 
                value={Staffname}
                onChange={(e) => setStaffname(e.target.value)}/></p>

                <p className='news_card_edit_each_info'>
                <h6 className='news_card_edit_each_info_title'>Staff Faculty</h6>
                <input className='news_card_edit_input' type = "text" 
                value={Stafffaculty}
                onChange={(e) => setStafffaculty(e.target.value)}/></p>

                <p className='news_card_edit_each_info'>
                <h6 className='news_card_edit_each_info_title'>Staff Role</h6>
                <input className='news_card_edit_input' type = "text" 
                value={Staffrole}
                onChange={(e) => setStaffrole(e.target.value)}/></p>


                <p className='news_card_edit_each_info'>
                <h6 className='news_card_edit_each_info_title'>Staff Introduction</h6>
                <textarea className='news_card_edit_content' rows="3" 
                value={Staffintro}
                onChange={(e) => setStaffintro(e.target.value)}/></p>


                <p className='news_card_edit_each_info'>
                <h6 className='news_card_edit_each_info_title'>Staff Email</h6>
                <input className='news_card_edit_input' type = "text" 
                value={Staffemail}
                onChange={(e) => setStaffemail(e.target.value)}/></p>
                <Link to = {{pathname: `/staff/${id}`}}><button onClick = {(e) => updateData(e)}className='news_card_edit_button'>Save</button></Link>           
                <Link to = {{pathname: `/staff/${id}`}}><button className='news_card_edit_button'>Back</button></Link>

            </form>
            
        </div>

        <Footer />
        </div>
    )
}

export default StaffEdit;