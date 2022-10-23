import React from 'react';
import './Form.css';
import tick from '../img/tick.png';


const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <div>
          <img src={tick} alt="tick" className="tick_img"/>
      </div>

      
    </div>
  );
};

export default FormSuccess;