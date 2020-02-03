import React from 'react';
import PhotoContact from '../assets/img/contact.jpg'
import './Contact.css'

const Contact = () => {
  return (
    <div className='container-fluid'>
      <img className='PhotoContact' src={PhotoContact} alt="circus man" />
      <form className='container mt-5'>
        <div className="form-group container">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="your@email.com" />
        </div>
        
        <div class="form-group container">
          <label htmlFor="exampleFormControlTextarea1">Ask us your question</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    </div>
  );
}

export default Contact;