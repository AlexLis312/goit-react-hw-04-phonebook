import React from 'react';
import './ContactList.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button onClick={() => onDeleteContact(id)}>delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
