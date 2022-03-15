import React, { Component } from 'react';

import img_perfil from "../../assets/img/img-perfil.png"

import { SocialItems } from './SocialItems';

import './Home.css'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <section id='home' className='home d-flex align-items-center flex-wrap justify-content-center'>
                    <section class="hero pt-5">
                        <div class="content">
                    
                            <div className='row'>
                                <div className='col-md-12 align-self-center'>
                                    <img src={img_perfil} className='img-thumbnail img-custom m-3' />
                                </div>
                                <div className='w-100' />
                                <div className='w-100 col-md-12 align-self-center d-flex flex-column align-items-center ' >
                                    <h2 className='h1'>Lucas Carino</h2>
                                    <hr className='home-hr'/>
                                    <h5>DESARROLLADOR FRONT-END</h5>
                                </div>
                                <div className='w-100' />
                                <div className='w-100 col-md-12 align-self-center' >
                                    <ul>
                                        <div className='social-icons' >
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
                        </div>
                        <div class="waves"></div>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}

export default Home;