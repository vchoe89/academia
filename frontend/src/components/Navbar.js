import React from 'react'
import {Link} from 'react-router-dom'

import {Menu} from 'semantic-ui-react'

function Navbar() {
  return(
    <Menu>
      <Menu.Item className="header"
        name='academia'
        as={Link}
        to="/"
         />

      <Menu.Item
        name='aboutUs'
      />
      <Menu.Item
        name='jobs'

      />
      <Menu.Item
        name='locations'

      />
      <Menu.Item position="right"
        name='login'

      />
    </Menu>
  )
}

export default Navbar;
