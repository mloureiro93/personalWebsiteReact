import React, { Component } from 'react'
import './components.css'
import duckawaypc from './../images/project1.jpg'
import twodayspc from './../images/project2.jpg'
import thriftpc from './../images/project3.jpg'
import enopc from './../images/eno-pc.jpg'
import project1 from './project1'
// import { Link } from 'react-router-dom';


export default class Cards extends Component {
  render() {
    return (
      <div className="card-deck">
    
      <div className="card" data-testid = 'card-1'>
        <img src={enopc} className="card-img-top" alt="eno"/>
        <div className="card-body">
          <h5 className="card-title">ENO CAMPAIGN</h5>
          <p className="card-text">This Campaign is the result of a challenge to create a campaign for the brand Eno. To those who may not be familiar with this product it is is an over-the-counter antacid and digestion aiding medication. The challenge was to create something that would portrait the brand in a light and fun way.</p>
        </div>
        <div className="card-footer">
         <small className="text-muted"> MARCH 2020</small>
        </div>
      </div>
      <div className="card" data-testid = 'card-2'>
        <img src={thriftpc} className="card-img-top" alt="thrift"/>
        <div className="card-body">
          <h5 className="card-title">THRIFT-POINT</h5>
          <p className="card-text">This MERN application is meant for store owners to promote their stores and interact with it's consumers and for regular users to share their experinces as well as find new ones. Want to help the planet and looking good while doing so? This project was created over the period of a week as part of a full-stack web development bootcamp.</p>
        </div>
        {/* <a target="blank" href="https://thriftpointapp.herokuapp.com/">Here's the link</a> */}
        <div className="card-footer">
        <small className="text-muted"> DEC 2019</small>
        </div>
      </div>
      <div className="card" data-testid = 'card-3'>
        <img src={twodayspc} className="card-img-top" alt="twodays"/>
        <div className="card-body">
          <h5 className="card-title">TWO DAYS AWAY</h5>
          <p className="card-text">This project was inspired by the love for travelling and the knowledge that often deciding where to go and planning activities can be overwelming. This app will allow the user be randomly attributed a destination as well as tailored 2 day activity plan for the most relaxing, fun and carefree getaway possible. This project was created over the period of a week as part of a full-stack web development bootcamp.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">NOV 2019</small>
        </div>
      </div>
   
      <div className="card" data-testid = 'card-3' >
        <img src={duckawaypc} className="card-img-top" alt="duckaway"/>
        <div className="card-body" >
       
          <h5 className="card-title">DUCKAWAY</h5>

          <p className="card-text">This project was mainly inspired by my time spent in South Korea and it revolves around korean drinking culture.  This game was built using html, css, javasricp and canvas as part of the first one week project of Ironhack Boothcamp.</p>
          
        {/* <Link to="/duckaway">Click me</Link> */}
        </div>
        <div className="card-footer">
          <small className="text-muted">OCT 2019</small>
        </div>
      </div>
      
    </div>

    )
  }
}
