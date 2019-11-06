import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Icon} from 'semantic-ui-react'

function Navbar() {
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
        name='jobs'
        as={Link}
        to="/JobForm"

      />
      <Menu.Item
        name='locations'

      />

    <div className='user icon'><Icon size='big' circular={true} name='user'/></div>

      <Menu.Item position="right"
        name='sign in'
        as={Link}
        to='/login'
      />
    </Menu>
  )
}

export default Navbar;
