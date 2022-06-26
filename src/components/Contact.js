// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({ contact }) => {
    return (
        <div className="card">
            <img src={contact.photo} alt={contact.name} />
            <div className="card-content">
                <h2>{contact.name}</h2>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
            </div>
        </div>
    )
}

export default Contact;