import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import React from 'react';
import emailjs from '@emailjs/browser';

const FormSubmit = ({ submitForm }) => {
  const { handleChange, values, errors } = useForm(
    submitForm,
    validate
  );
  

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.sendForm('service_xa3tw8l', 'template_rse68zf', e.target, 'SIu8NkJ1BNPMpWshO').then(res => {
      console.log(res);
    }).catch(err=> console.log(err))
   

  }

  return (
    <div className='form-content'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1 className='Form_head'>
        Send Us A Message
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            name='firstname'
            placeholder='Enter your first name'
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter your last name'
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Message</label>
          <textarea  
            className='form-input form_text_input'
            rows="3"
            type='message' 
            name='message'
            placeholder='Tell us something...'
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>

        <button className='form-input-btn' type='submit'>
          Send
        </button>
        
      </form>
    </div>
  );
};

export default FormSubmit;
