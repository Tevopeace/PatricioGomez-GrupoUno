import React from 'react';
import './About.css'; 

export default function AboutPag() {
    return (
        <div>
            <h1>Sobre Nosotros - EGAMES</h1>

            <div className="card">
                <h3>Nuestra Misión</h3>
                <p>
                    En EGAMES, nuestra misión es proporcionar a los gamers de todas las edades un lugar donde puedan encontrar los mejores juegos y accesorios. Creemos que los videojuegos son una forma de expresión y una manera de conectar con otros, y nos esforzamos por ofrecer una experiencia de compra que inspire y emocione a nuestros clientes.
                </p>
            </div>

            <div className="card">
                <h3>Lo Que Ofrecemos</h3>
                <ul>
                    <li><strong>Variedad de Juegos:</strong> En EGAMES, contamos con una amplia selección de juegos para PS4, Xbox, Nintendo Switch y PC. Desde los títulos más recientes hasta los clásicos atemporales, tenemos algo para cada tipo de jugador.</li>
                    <li><strong>Accesorios y Merchandising:</strong> Además de juegos, ofrecemos una gama de accesorios, como controladores, auriculares y artículos de merchandising de tus franquicias favoritas, para que puedas disfrutar de tu experiencia de juego al máximo.</li>
                    <li><strong>Atención al Cliente:</strong> Nuestro equipo está formado por apasionados del gaming que están aquí para ayudarte. Si tienes preguntas sobre un producto o necesitas recomendaciones, no dudes en contactarnos. ¡Estamos aquí para ti!</li>
                    <li><strong>Comunidad Gamer:</strong> En EGAMES, no solo somos una tienda, somos una comunidad. Organizamos eventos en línea, torneos y promociones especiales para que nuestros clientes puedan disfrutar de su pasión por los videojuegos juntos.</li>
                </ul>
            </div>

            <div className="card">
                <h3>Compromiso con la Calidad</h3>
                <p>
                    Nos comprometemos a ofrecer solo productos de alta calidad. Trabajamos con proveedores confiables y revisamos cada artículo para asegurarnos de que cumpla con nuestros estándares. Tu satisfacción es nuestra prioridad, y estamos aquí para garantizar que tengas una experiencia de compra positiva.
                </p>
            </div>

            <div className="card">
                <h3>Únete a Nuestra Comunidad</h3>
                <p>
                    Te invitamos a explorar nuestra tienda en línea y descubrir todo lo que tenemos para ofrecer. Síguenos en nuestras redes sociales para estar al tanto de las últimas novedades, lanzamientos y promociones exclusivas. En EGAMES, cada compra es una nueva aventura, y estamos emocionados de que formes parte de nuestra comunidad.
                </p>
            </div>

            <div className="card">
                <h3>Gracias por elegirnos como tu tienda de videojuegos. ¡Esperamos verte pronto!</h3>
            </div>
        </div>
    );
}