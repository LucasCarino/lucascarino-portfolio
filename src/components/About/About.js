import React, { Component } from 'react';

import './About.css'

import { skills } from './Skills_data';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id='about' className='about d-flex align-items-center flex-wrap'>
                    <div className='row d-flex justify-content-around'>
                        <div className='col-md-4'>
                            <h1>¡Hello World!</h1>
                            <p className='text-justify'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur scelerisque lectus eu rutrum. Aenean efficitur, dolor ac vulputate pulvinar, lacus arcu lacinia sapien, in efficitur risus felis et lectus. Nunc imperdiet erat ut consequat varius. Nam elementum leo ac diam laoreet vestibulum. Cras ut eros porta, varius urna eget, imperdiet nunc. Fusce finibus viverra venenatis. Donec vel sollicitudin enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh nunc, porttitor in maximus congue, ultrices posuere quam.
                            </p>
                            <div>
                                <button class='fill mx-4 px-4 py-1'>Mi CV</button>
                                <button class='fill mx-4 px-4 py-1'>Contactame</button>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <h1>Skills</h1>
                            <ul className='skills'>
                                {skills.map((skill) => {
                                    return (
                                        <li className="skill h6" key={skill.id}>
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