import React, { Component } from 'react'
import './components.css'

export default class Header extends Component {
  render() {
    return (
      <div>
       <header>
       <div className='header-text'>
      <span style={{fontWeight: 'bold'}}> WELCOME *</span>
      <span style={{fontWeight: 'bold'}}> BEM-VINDO *</span>
      <span style={{fontWeight: 'bold'}}> 어서 오십시오</span>
      </div>
      <img src="https://images.unsplash.com/photo-1543332164-6e82f355badc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
      
        </header>
        
      </div>
    )
  }
}
