import React from 'react';
import './Contact.css'; 

export default function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contacto</h1>
            <h2 className="contact-subtitle">Formas de Contacto</h2>
            <ul className="contact-list">
                <li>
                    <strong>Correo Electrónico:</strong> 
                    <a href="mailto:Patriciohernan.gomez@alumnos.ulagos.cl"> Patriciohernan.gomez@alumnos.ulagos.cl</a>
                </li>
                <li>
                    <strong>Facebook:</strong> 
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> No informado</a>
                </li>
                <li>
                    <strong>Número de Celular:</strong> 
                    <a href="tel:+56 9 48084 4903"> +56 9 48084 4903</a>
                </li>
                <li>
                    <strong>Instagram:</strong> 
                    <a href="https://www.instagram.com/freezy_.tevo/" target="_blank" rel="noopener noreferrer"> @freezy_.tevo</a>
                </li>
            </ul>
            <div className="contact-footer">
                <p>¡No dudes en contactarme!</p>
            </div>
        </div>
    );
}