import React, { useState } from 'react';
import './Form.css';
import FormSignIn from './FormSignIn';
import FormSuccess from './FormSucces';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>x</span>
        <div className='form-content-left'>
          <img className='form-img' src='images/img-1.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignIn submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Login;