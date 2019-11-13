import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Icon} from 'semantic-ui-react'

function Navbar(props) {
  return(

    <Menu>
      <Menu.Item
        as={Link}
        to="/main"
        >
          <img src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-and-lines-1/2/28-512.png' />
        </Menu.Item>

      <Menu.Item
        name='aboutUs'
        as={Link}
        to="/about"
      />

      <Menu.Item
        name='Teach'
        as={Link}
        to="/JobForm"

      />

      <Menu.Item
        name='Your Courses'
        as={Link}
        to='/courses'
        />

        {props.currentUser === null ? null :
          <Menu.Item id='name-header' position='right'> Welcome {props.currentUser.name} </Menu.Item>}


        <Menu.Item position='right' id='signin-button' as={Link} to="/login">
          {props.currentUser === null ? "Sign In" : "Sign Out"}
        </Menu.Item>
    </Menu>
  )
}

export default Navbar;