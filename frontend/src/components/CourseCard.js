import React, {useState} from 'react'
import CourseDetails from './CourseDetails.js'
import {Container, Grid} from 'semantic-ui-react'

const CourseCard = (props) => {


  return(
    <Container textAlign='center'>
      <Grid className='course details'>
        {
        props.courses.map(course => {
      return <CourseDetails button={props.button} currentUser={props.currentUser} bookCourse={props.bookCourse} course={course}/>
    })
  }
      </Grid>
    </Container>
  )
}

export default CourseCard;
