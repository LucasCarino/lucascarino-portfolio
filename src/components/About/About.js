import React, { Component } from 'react';

import './About.css'

import { skills } from './Skills_data';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id='about' className='about d-flex align-items-center flex-wrap'>
                    <div className='row d-flex justify-content-around w-100'>
                        <div className='col-md-4 px-5 pb-3'>
                            <h1 className='text-start'><b>¡Hello World!</b></h1>
                            <p className='text-justify'>
                                Mi nombre es Lucas Carino, soy un desarrollador web apasionado por el front-end, cuento con 2 años de experiencia en diferentes prácticas y aprendizajes en lenguajes de programación.<br/>

                                Me gusta realizar todo tipo de trabajos relacionado al diseño web, la interfaz gráfica y la interacción con los usuarios.<br/>

                                Me considero una persona sumamente responsable y organizada, pro-activa y muy eficiente a la hora de realizar tareas.<br/>

                                Mi objetivo personal de desempeñar, ofrecer y desarrollar diferentes capacidades para poder conseguir un excelente resultado en la labor y el área asignada.
                            </p>
                            <div>
                                <button class='about-button text-uppercase mx-4 px-4 py-1'><a href={require('../../assets/files/CV_Lucas_Carino.pdf')} download>CV</a></button>
                                <button class='about-button text-uppercase mx-4 px-4 py-1'><a href='#contact'>Contactame</a></button>
                            </div>
                        </div>
                        <div className='col-md-4 text-start px-5'>
                            <h1><b>Skills</b></h1>
                            <ul className='skills'>
                                {skills.map((skill) => {
                                    return (
                                        <li className='skill h6' key={skill.id}>
                                            {skill.text}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default About;