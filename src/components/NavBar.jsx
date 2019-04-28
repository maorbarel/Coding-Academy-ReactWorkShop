import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <section className="NavBar">
            <HashRouter>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/contact">Contact</Link>
                <Link className="link" to="/statistic">Statistic</Link>
                <Link className="link" to="/signup">Sign Up</Link>
                <Link className="link" to="/logout">Log Out</Link>
            </HashRouter>
        </section>
    )
}
export default NavBar;