import { links } from './NavBar_data';
import './NavBar.css';
import React, { Component } from 'react';

class NavBar extends Component {
    handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 64
        })
    }

    state = { clicked: false }

    handleClickMobile = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <React.Fragment>
                <nav className='nav-bar sticky row mx-0'>
                    <div className='col-md-1'>

                    </div>
                    <div className='col-md-3 mx-0 px-0'>
                        <div className="menu-icon me-5" onClick={this.handleClickMobile}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className={this.state.clicked ? 'nav-menu active mb-0' : 'nav-menu mb-0'}>
                            {links.map((link) => {
                                return (
                                    <li key={link.id}>
                                        <a href={link.url} onClick={this.handleClick}
                                            >
                                            {link.text}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>

                        {/* <div>
                            {links.map((link) => {
                                return <a href={link.url} key={link.id} onClick={this.handleClick}>
                                    {link.text}
                                </a>
                            })}
                        </div> */}
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default NavBar;