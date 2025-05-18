import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ addContact }) => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });
  const { name, number } = state;

  const handleChange = event => {
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    addContact(name, number);
    setState({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
