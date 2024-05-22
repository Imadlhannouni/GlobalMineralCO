import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id='contact' className="container mt-5">
      <h2 className="text-center mb-4">Nous contacter</h2>
      <form className="text-center">
        <div className="form-group">
          <label htmlFor="email">Numéro de telephone</label>
        </div>
        <label htmlFor="email">+212 703 177030</label>
      </form>
    </section>
  );
};

export default Contact;
