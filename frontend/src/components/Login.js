import React, {useState} from 'react'
import { Form, Segment, Button} from 'semantic-ui-react'

const URL = 'http://localhost:3000/'

const Login = (props) => {

  const [user, setUser] = useState("")


  const handleLoginSubmit = () => {
    fetch(URL+'users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user
      })
    })
    .then(r => r.json())
    .then(userData => {
      props.onChangeUser(userData)
    })
  }




  return(
    <div id='login-page'>
      <div id='login-form'>
        <Segment inverted>
          <div className='login form text'><div className='existing user'>Existing User</div>
          <Form inverted onSubmit={handleLoginSubmit}>
            <Form.Field required>
            <label>Email Address</label>
              <input onChange={(e) => setUser(e.target.value)} type='text' placeholder="Enter Email"/>
            <label>Password</label>
              <input type='password' placeholder="Enter Password"/>
            </Form.Field>
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Button type='submit'>Submit</Button>
          </Form>
          </div>
        </Segment>
        </div>
        <div>
          <Segment inverted id='new-user-form'>
            <div>
              <div className='existing user'>Create an Account</div>
            <Form inverted>
              <Form.Field required>
              <label>First Name</label>
                <input onChange={(e) => setUser(e.target.value)} type='text' placeholder="First Name"/>
              <label>Last Name</label>
                <input type='text' placeholder='Last Name'/>
              <label>Email Address</label>
                <input type='text' placeholder='Email Address'/>
              <label>Password</label>
                <input type='password'/>
              <label>Confirm Password</label>
                <input type='password'/>
              </Form.Field>
              <Form.Checkbox label='I agree to the Terms and Conditions' />
              <Button type='submit'>Submit</Button>
            </Form>
            </div>
          </Segment>
        </div>
      </div>


  )



}

export default Login
