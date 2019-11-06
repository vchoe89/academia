import React from 'react'
import {Menu} from 'semantic-ui-react'


function Footer(){

  return(
    <Menu stackable>
      <Menu.Item>
          <img src='https://react.semantic-ui.com/logo.png' />
        </Menu.Item>

        <Menu.Item name='features' >
          Features
        </Menu.Item>

        <Menu.Item name='testimonials' >
          Testimonials
        </Menu.Item>

        <Menu.Item name='sign-in' >
          Sign-in
        </Menu.Item>
    </Menu>
  )

}

export default Footer;
