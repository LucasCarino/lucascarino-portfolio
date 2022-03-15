import React, { Component } from 'react';

import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <section className='contact d-flex flex-column justify-content-center align-items-center' id='contact'>
                    <header>MINIMALISTIC FORM</header>

                    <form id="form" class="topBefore">

                        <input id="name" type="text" placeholder="NAME" />
                            <input id="email" type="text" placeholder="E-MAIL" />
                                <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                                <input id="submit" type="submit" value="GO!" />

                                </form>
                            </section>
                        </React.Fragment>
                        )
    }
}

                        export default Contact;