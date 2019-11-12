import React, {useState} from 'react'
import {Card, Container, Grid} from 'semantic-ui-react'
import YourCourseDetails from './YourCourseDetails.js'



const YourCourses = (props) => {

  return(
    <Container textAlign='center'>
      <Card.Group>
        {props.bookedCourses.map(course => {
         return <YourCourseDetails course={course} />
        })
      }
      </Card.Group>
    </Container>




  )




}

export default YourCourses;
