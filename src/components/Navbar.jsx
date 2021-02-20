import React, { Component } from 'react'
import './components.css'

export default class Navbar extends Component {
  render() {
    return (
      <div data-testid = 'navbar'>
        <nav className="navbar navbar-expand-lg navbar-light bg-white mx-auto">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link " href="#">Home</a>
      <a className="nav-item nav-link" href="#about">About</a>
      <a className="nav-item nav-link" href="#title-projects">Projects</a>
      <a className="nav-item nav-link " href="#contacts" tabIndex="-1" aria-disabled="true">Contacts</a>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
