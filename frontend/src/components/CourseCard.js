import React, {useState} from 'react'
import CourseDetails from './CourseDetails.js'
import {Container, Grid, Card} from 'semantic-ui-react'

const CourseCard = (props) => {


  return(
      <div id='course-page'>
      <Card.Group  itemsPerRow={4}>
        {
        props.courses.map(course => {
      return <CourseDetails button={props.button} currentUser={props.currentUser} bookCourse={props.bookCourse} course={course}/>
    })
  }
      </Card.Group>
      </div>
  )
}

export default CourseCard;
