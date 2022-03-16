import React, { Component } from 'react';

import './Contact.css'

import emailjs from 'emailjs-com';

// import Dialog from './Dialog';

class Contact extends Component {
    state = {
        isOpen: false
    }

    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "El campo 'Nombre' no puede estar vacío";
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "El campo 'E-Mail' no puede estar vacío";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        if (!fields["message"]) {
            formIsValid = false;
            errors["message"] = "El campo 'Mensaje' no puede estar vacío";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            alert("Formulario enviado con exito");
            this.sendEmail(e);
        }

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hxkjdd5', 'template_a54c9hk', e.target, 'tyd4_WGCCjkQgJ2Y4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    render() {
        return (
            <React.Fragment>
                <section className='contact d-flex flex-column justify-content-center align-items-center text-white' id='contact'>
                    <header className='text-uppercase'>Contacto</header>
                    <form id="form" class="topBefore" onSubmit={this.contactSubmit.bind(this)}>
                        <input refs="name" id="name" name="name" type="text" placeholder="NOMBRE *" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
                        <span className="error error-name">{this.state.errors["name"]}</span>
                        <input refs="email" id="email" name="email" type="text" placeholder="E-MAIL *" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                        <span className="error error-email">{this.state.errors["email"]}</span>
                        <input id="phone" name="phone" type="number" placeholder="CELULAR" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]} />
                        <textarea id="message" name="message" type="text" placeholder="MENSAJE *" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]}></textarea>
                        <span className="error error-message">{this.state.errors["message"]}</span>
                        <button id="submit" value="Submit">ENVIAR</button>
                    </form>
                </section>
            </React.Fragment>
        )
    }
}

export default Contact;