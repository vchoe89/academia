import React from 'react'
import {Animated} from "react-animated-css";
import {NavLink} from 'react-router-dom';



function Welcome(){



  return(
    <React.Fragment>
      <div>
        <Animated animationIn="fadeInLeft" animationInDuration={2500} isVisible={true}>
          <div>
              <h2 className='welcome'>Welcome to</h2>
              <h1 className='welcome'>Academia</h1>
              <h3 className='welcome'>what we do</h3>
          </div>
        <NavLink className='ui button welcome' to="/main" isVisible={false} >Get Started</NavLink>
        </Animated>
      </div>
      <div>
        icon
      </div>
    </React.Fragment>

  )
}


export default Welcome;
