import React, { useState, useEffect } from 'react'
import {Container, Form, Menu, Dropdown, Button} from 'semantic-ui-react'


const rates =[
    { key: 10, text: '$10/hr', value: 10},
    { key: 20, text: '$20/hr', value: 20},
    { key: 30, text: '$30/hr', value: 30},
    { key: 40, text: '$40/hr', value: 40},
    { key: 50, text: '$50/hr', value: 50},
    { key: 60, text: '$60/hr', value: 60},
    { key: 70, text: '$70/hr', value: 70},
    { key: 80, text: '$80/hr', value: 80},
    { key: 90, text: '$90/hr', value: 90},
    { key: 100, text: '$100/hr', value: 100},
  ]

  const categories = [
    {key: 'math', text: 'Math', value: 'math'},
    {key: 'english', text: 'English', value: 'math'},
    {key: 'science', text: 'Science', value: 'math'},
    {key: 'music', text: 'Music', value: 'math'},
    {key: 'sports', text: 'Sports', value: 'math'},

  ]

const JobForm = (props) => {

  const [course, setCourse] = useState("")
  const [rate, setRate] = useState("")
  const [category, setCategory] = useState("")
  const [location, setLocation] = useState("")


  return(
      <Container textAlign='centered'>
          <Form onSubmit={(e) => handleJobForm(e)}>
              <Form.Input name='course' label='Course Name' placeholder='Course Name' width={7} />
                <Menu>
                  <Dropdown text='Your Rate' selection options={rates} />
                  <Dropdown text='Select a Category' selection options={categories} />
                </Menu>
              <Form.Input label='Loction' placeholder='City, State' width={7} />
            <Button type='submit'>Submit</Button>
          </Form>
      </Container>

  )
}

export default JobForm;
