import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Footer from '../Footer';

function ContactForm() {
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ formState, setFormState ] = useState({ name: '', email: '', message: ''});
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value})
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section id="contact-container">
      <h1 className="body-header" id='contact-header'>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="input-div input">
          <div className="label-div">
            <label htmlFor="name">Name:</label>
          </div>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
        </div>

        <div className="input-div input">
          <div className="label-div">
            <label htmlFor="email">Email:</label>
          </div>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
        </div>

        <div className="input-message-div">
          <div className="message-div input">
            <div id='message-label'>
              <label htmlFor="message">Message:</label>
            </div>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
          </div>

          {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <button id="submit-button" type="submit">Submit</button>
        </div>

      </form>

      <Footer/>

    </section>

  )
}

export default ContactForm;