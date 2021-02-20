import React, { Component } from 'react'
import './components.css'
import linkedin from './../images/linkedin (1).png' 
import instagram from './../images/instagram.png'
import github from './../images/github.png'

export default class Footer extends Component {
  render() {
    return (
      <div data-testid = 'footer'>
        <footer className="footer mt-auto py-3">
  <div className="container">
     <div className="social-media">
    <a target="_blank" href="https://www.linkedin.com/in/maria-loureiro-689a1b122/"><img class="linkedin" src={linkedin} alt="linkedin"/></a>
    <a target="_blank" href="https://github.com/mloureiro93"><img class="git" src={github} alt="github"/></a>
    <a target="_blank" href="https://www.instagram.com/mariamadureiraloureiro/?hl=af"><img class="insta" src={instagram} alt="instagram"/></a>
  
  </div>
  
  <div className="copyright" id='contacts'>
  <p>  &copy; 2020 Maria Madureira Loureiro </p>
  <p> mariamadureiraloureiro@gmail.com kakaotalk: miml93</p>
  </div>
  </div>
</footer>
      </div>
    )
  }
}
