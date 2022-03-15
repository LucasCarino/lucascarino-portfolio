import React, { Component } from 'react';

import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <section className='contact d-flex flex-column justify-content-center align-items-center text-white' id='contact'>
                    <header className='text-uppercase'>Contacto</header>

                    <form id="form" class="topBefore ">
                        <input id="name" type="text" placeholder="NOMBRE" />
                        <input id="email" type="text" placeholder="E-MAIL" />
                        <textarea id="message" type="text" placeholder="MENSAJE"></textarea>
                        <input id="submit" type="submit" value="ENVIAR" />
                    </form>
                </section>
            </React.Fragment>
        )
    }
}

export default Contact;