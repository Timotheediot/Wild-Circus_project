import React from 'react';
import PhotoContact from '../assets/img/contact.jpg'
import './Contact.css'

const Contact = () => {
  return (
    <div className='container-fluid'>
      <img className='PhotoContact' src={PhotoContact} alt="circus man" />
      <form className='container mt-5'>
        <div className="form-group container">
          <label htmlFor="exampleFormControlInput1">Addresse Email</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="ton@email.com" />
        </div>
        
        <div class="form-group container">
          <label htmlFor="exampleFormControlTextarea1">Pose ta question</label>
          <textarea className="form-control" placeholder="Ta question ici…" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-dark mb-4">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;