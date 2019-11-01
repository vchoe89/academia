import React from 'react'
import {Menu} from 'semantic-ui-react'

function Navbar() {
  return(
    <Menu>
      <Menu.Item><h3 className="header">academia</h3></Menu.Item>
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
/*
took out active and onClick refer to semantic->menu->header
 */
