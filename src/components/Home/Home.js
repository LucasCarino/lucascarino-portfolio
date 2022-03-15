import React, { Component } from 'react';

import img_perfil from "../../assets/img/img-perfil.png"

import { SocialItems } from './SocialItems';

import './Home.css'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <section id='home' className='home d-flex align-items-center flex-wrap justify-content-center'>
                    {/* <div className='w-50'>
                        <h1>HOLA SOY LUCAS CARINO</h1>
                        <p className='text-justify'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur scelerisque lectus eu rutrum. Aenean efficitur, dolor ac vulputate pulvinar, lacus arcu lacinia sapien, in efficitur risus felis et lectus. Nunc imperdiet erat ut consequat varius. Nam elementum leo ac diam laoreet vestibulum. Cras ut eros porta, varius urna eget, imperdiet nunc. Fusce finibus viverra venenatis. Donec vel sollicitudin enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh nunc, porttitor in maximus congue, ultrices posuere quam.
                        </p>
                        <div>
                        <button class="fill mx-5 px-5 py-1">Mi CV</button>
                        <button class="fill mx-5 px-5 py-1">Contactame</button>
                        </div>

                    </div> */}
                    <div className='row'>
                        <div className='col-md-12 align-self-center'>
                            <img src={img_perfil} className='img-thumbnail img-custom m-3' />
                        </div>
                        <div className='w-100' />
                        <div className='w-100 col-md-12 align-self-center' >
                            <h2>Soy Lucas Carino</h2>
                        </div>
                        <div className='w-100' />
                        <div className='w-100 col-md-12 align-self-center' >
                            <h4>Desarrollador Front-end</h4>
                        </div>
                        <div className='w-100' />
                        <div className='w-100 col-md-12 align-self-center' >
                            <ul>
                                <div className='social-icons' >
                                    {/* <a className='fab fa-instagram social-icon'></a> */}
                                    {SocialItems.map((item, index) => {
                                        return (
                                            <li>
                                                <a className={item.cName} href={item.url} target="_blank">
                                                    {item.title}
                                                </a>
                                            </li>
                                        )
                                    })}
                                </div>
                            </ul>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Home;