import React from 'react'
import { Form, Input, Container, Divider, Segment, Button} from 'semantic-ui-react'


const Login = () => {

  return(
    <div>
    <Container textAlign='centered'>
      <Segment inverted>
        <Form inverted>
          <Form.Field required>
          <label>Email Address</label>
            <input type='text' placeholder="Enter Email"/>
          <label>Password</label>
            <input type='password' placeholder="Enter Password"/>
          </Form.Field>
          <Form.Checkbox label='I agree to to Terms and Conditions' />
          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
    </Container>
    </div>
  )



}

export default Login
