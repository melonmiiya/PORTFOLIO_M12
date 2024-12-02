import { useState } from 'react';
import { validateEmail } from '../utils/helper';
function Form() {
      const [email, setEmail] = useState('');
    const [formName, setformName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
        setEmail(inputValue);
        } else if (inputType === 'formName') {
        setformName(inputValue);
        } 
      };
    const onBlurEmailValidation = (e) => {
        if (!validateEmail(email)) {
      setEmailErrorMessage('Email is invalid ');
        } else {
        setEmailErrorMessage('');}
        };
    const onBlurValidation = (e) => {
        if (!formName) {
      setErrorMessage('* Name is Required');
        }  else {
        setErrorMessage('');}
        return;
        };
      

  return (
    <div className="container text-center">
      <form className="form">
        <label>Name:*</label>
        <input
          value={formName}
          name="formName"
          onChange={handleInputChange}
          onBlur={onBlurValidation}
          type="text"
          placeholder="Name"
        />
          {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        <label>Email Address:*</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={onBlurEmailValidation}
          type="email"
          placeholder="Email"
        />
        {emailErrorMessage && (
        <div>
          <p className="error-text">{emailErrorMessage}</p>
        </div>
      )}
        <label>Message:</label>
        <textarea name="postContent" />
        <input type="submit" value="Submit" />
      </form>

    </div>
  );
}

export default function Contact() {

    return (
        <div className="contact-wrap">
            <h1>Contact</h1>
            <Form />
        </div>
    )
}