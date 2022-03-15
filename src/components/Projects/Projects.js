import React, { Component } from 'react';

import './Projects.css'

import { ProjectsItems } from './Projects_data';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id='projects' className='projects d-flex align-items-center flex-wrap container' >

                    <div className="row justify-content-around align-items-center">
                        {ProjectsItems.map((project, index) => {
                            return (
                                // <div>
                                    <div class="img-container">
                                        <img src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" className='img-projects'/>
                                        <p class="title">Titulo de la app</p>
                                        <div class="overlay"></div>
                                        <div class="button"><a href="#">Visitar pagina</a></div>
                                    </div>
                                // </div>
                            )
                        })}
                    </div>

                </section>
            </React.Fragment>
        )
    }
}

export default About;