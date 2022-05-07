// import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        {props.title}
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link id='home' className="nav-link active" to="/">
                                    Home
                                </Link>
                            </li>
                            <li id='about' className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch mx-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                onClick={props.toggleMode}
                            />
                            <label className={`form-check-label text-${props.mode === "dark" ? "white" : "dark"}`} htmlFor="flexSwitchCheckDefault">
                                Toggle Dark Mode
                            </label>
                        </div>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-info"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

// PropTypes we can set the type of our props here.
Navbar.propTypes = { title: PropTypes.string }
// If we need something as important value set isRequired. It will not work in default values.
// Navbar.propTypes = { title: PropTypes.string.isRequired }

// Specifies the default values for props. If we not send anything it will auto set this value.
Navbar.defaultProps = { title: 'textUtils' };