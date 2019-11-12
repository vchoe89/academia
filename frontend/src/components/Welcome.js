import React from 'react'
import {Animated} from "react-animated-css";
import {NavLink} from 'react-router-dom';
import {Container, Image} from 'semantic-ui-react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

function Welcome(){

  return(
    <React.Fragment>
      <div className='welcome container'>
        <img className="welcome image" src='https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'  />
            <Animated animationIn="fadeInLeft" animationInDuration={2500} isVisible={true}>
                <div>
                  <h2 className='welcome'>Welcome to Academia</h2>
                </div>
            </Animated>
            <Animated animationIn='fadeInRight' animationInDuration={2500} isVisible={true}>
              <div>
                <h3 className='welcome'>learning made easier</h3>
                  <NavLink className='ui button welcome' to="/main" isVisible={false} >Get Started</NavLink>
              </div>
            </Animated>
      </div>

      <Footer />

    </React.Fragment>
  )
}

export default Welcome;
