import React from 'react'
import {Animated} from "react-animated-css";
import {NavLink} from 'react-router-dom';
import {Container, Image, Header} from 'semantic-ui-react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

function Welcome(){

  return(
    <React.Fragment>
      <div className='welcome container'>
        <img className="welcome image" src='https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'/>
            <Animated animationIn="slideInRight" animationInDuration={2500} isVisible={true}>
                <div className='welcome'>
                  <h2 id='top-header'>Welcome to academia</h2>
                </div>
            </Animated>
            <Animated animationIn='slideInUp' animationInDuration={3500} isVisible={true}>
              <div className='welcome'>
                <h3 id='sub-title'>learning made</h3>
                  <h3 id='bottom-sub-title'>easier</h3>
                  <NavLink id='welcome-button' className='ui button welcome' to="/main" isVisible={false}>Click Here To Get Started</NavLink>
              </div>
            </Animated>
      </div>


    </React.Fragment>
  )
}

export default Welcome;
