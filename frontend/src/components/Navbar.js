import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

function Navbar(props) {
  return(

    <Menu>
      <Menu.Item
        as={Link}
        id='nav-bar-text-main'
        to="/main"
        >
          <img src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-and-lines-1/2/28-512.png' />
        </Menu.Item>

      <Menu.Item
        id="nav-bar-text-teach"
        name='Teach'
        as={Link}
        to="/JobForm"
      />

      <Menu.Item
        id="nav-bar-text-courses"
        name='Your Courses'
        as={Link}
        to='/courses'
        />

        {props.currentUser === null ? null :
          <Menu.Item id='name-header' position='right'> Welcome {props.currentUser.name} !</Menu.Item>}

      <Menu.Item id='nav-bar-text-about' as="Link">
        About
      </Menu.Item>

      <Menu.Item id='nav-bar-text-mission' as="Link">
        Mission
      </Menu.Item>

        <Menu.Item id='nav-bar-text-signin' as={Link} to="/login">
          {props.currentUser === null ? "Sign In" : "Sign Out"}
        </Menu.Item>
    </Menu>
  )
}

export default Navbar;
