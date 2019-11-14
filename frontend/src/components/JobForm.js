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

const JobForm = (props) => {

  const categoryDropDown = () => {
    return props.categories.map(categories => {
      return {key: categories.name, text: categories.name, value: categories.id}
    })
  }

  const [course, setCourse] = useState("")
  const [hourly_rate, setRate] = useState("")
  const [category_id, setCategory] = useState("")
  const [location, setLocation] = useState("")


  const handleSubmit = (e) => {
    props.handleCourse({name: course, hourly_rate, category_id, location})
    setCourse("")
    setRate("")
    setCategory("")
    setLocation("")
  }


  return(
      <div id='job-form-page'>
      <Container textAlign='centered' id='job-form'>
        <h1>Love to Teach?</h1>
          <Form onSubmit={handleSubmit}>
              <Form.Input onChange={(e) => setCourse(e.target.value)} value={course} name='course' label='Course Name' placeholder='Course Name' width={7} />
                  <Dropdown id='rate-dropdown' placeholder='Your Rate' onChange={(e, {value}) => setRate(value)} value={props.value} selection options={rates} />
                  <Dropdown placeholder='Select a Category' onChange={(e, {value}) => setCategory(value)} value={props.value} selection options={categoryDropDown()} />
              <Form.Input label='Loction' onChange={(e) => setLocation(e.target.value)} value={location} placeholder='City, State' width={7} />
            <Button type='submit'>Submit</Button>
          </Form>
      </Container>
      </div>

  )
}

export default JobForm;
