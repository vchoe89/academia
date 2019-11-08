import React from 'react'
import {Animated} from "react-animated-css";
import {NavLink} from 'react-router-dom';
import {Container} from 'semantic-ui-react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

function Welcome(){

  return(
    <React.Fragment>
      <div>
      <Container className='welcome container'>
        <Animated animationIn="fadeInLeft" animationInDuration={2500} isVisible={true}>
              <h2 className='welcome'>Welcome to Academia</h2>
              <h3 className='second welcome'>what we do</h3>
              <div class='button'>
                <NavLink className='ui button welcome' to="/main" isVisible={false}>Get Started</NavLink>
              </div>
        </Animated>
      </Container>
      </div>
      <Footer/>

    </React.Fragment>

  )
}

export default Welcome;
