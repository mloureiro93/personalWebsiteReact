import React from 'react';

import './App.css';

import Header from './components/Header'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Title from './components/Title'
import Footer from './components/Footer'
import Cards from './components/ProjectCards'
import About from './components/About'

function App() {
  return (
    <div className="App">
   <Header></Header>
   <Navbar></Navbar>
   <Jumbotron></Jumbotron>
   <About></About>
   <Title></Title>
   <Cards> </Cards>
   <Footer></Footer>
      
    </div>
  );
}

export default App;
