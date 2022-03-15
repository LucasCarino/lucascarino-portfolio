import React, { Component } from 'react';

import './Projects.css'

import { ProjectsItems } from './Projects_data';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id='projects' className='projects d-flex align-items-center flex-wrap container' >
                    <div className="row">
                        <h1 className='text-uppercase title-projects pb-5'>proyectos</h1>
                        {ProjectsItems.map((project, index) => {
                            return (
                                <div className='col-md-4 d-flex justify-content-center'>
                                    <div class="img-container">
                                        <img src={require("../../assets/img/" + project.img)} className='img-projects' />
                                        <p class="title">{project.title}</p>
                                        <div class="overlay"></div>
                                        <div class="button"><a href={project.url}>Visitar pagina</a></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </section>
            </React.Fragment>
        )
    }
}

export default About;