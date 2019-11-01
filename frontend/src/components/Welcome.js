import React from 'react'
import {Animated} from "react-animated-css";
import {NavLink} from 'react-router-dom';



function Welcome(){



  return(
    <React.Fragment>
      <div>
        <Animated animationIn="fadeInLeft" animationInDuration={2500} isVisible={true}>
          <div>
              <h1 className='welcome'>Welcome</h1>
          </div>
        <NavLink className='ui button' to="/main">Get Started</NavLink>
        </Animated>
      </div>
    </React.Fragment>

  )
}


export default Welcome;
