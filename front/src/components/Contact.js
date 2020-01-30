import React from 'react';
import PhotoContact from '../assets/img/contact.jpg'
import './Contact.css'

const Contact = () => {
  return (
    <div className='container-fluid'>
      <img className='PhotoContact' src={PhotoContact} alt="circus man" />
      <form className='container mt-5'>
        <div class="form-group container">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="your@email.com" />
        </div>
        
        <div class="form-group container">
          <label for="exampleFormControlTextarea1">Ask us your question</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-dark">Submit</button>
      </form>
    </div>
  );
}

export default Contact;