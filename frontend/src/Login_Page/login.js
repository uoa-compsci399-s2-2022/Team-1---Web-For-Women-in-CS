import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './login.css';
import Header from '../components/header/header';
import Header_lg from '../components/header/header_test';
import Footer from '../components/footer/footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {login} from "../services/auth.service";

function Login() {
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
        } else {

            // console.log(username)
            // console.log(password)
            login({
                username,
                password,
            }).then(data => {
                if (data) {
                    navigate('/')
                    // window.location.reload()
                }
            }).catch(err => {

            })
        }
        setValidated(true);
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
  
          <div className='current_link'><Link to='/' className="active_link" > Home</Link> / Login</div>
  
      

      <div className="login_test">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control required type="text" placeholder="Enter Username"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className='login_sub'>
                Submit
            </Button>
        </Form>
      </div>

      <Footer />
    </div>
    </div>
  )
}

export default Login;