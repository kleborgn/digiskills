import React from 'react';
import '../css/Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right-success'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src='/images/img-3.svg' alt='success' />
    </div>
  );
};

export default FormSuccess;