import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


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
      <h1 id='contact-header'>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div class="input-div input">
          <div class="label-div">
            <label htmlFor="name">Name:</label>
          </div>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
        </div>

        <div class="input-div input">
          <div class="label-div">
            <label htmlFor="email">Email:</label>
          </div>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
        </div>

        <div class="message-div input">
          <div>
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
      </form>

    </section>

  )
}

export default ContactForm;