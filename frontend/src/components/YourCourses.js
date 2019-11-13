import React, {useState} from 'react'
import {Card, Container, Grid} from 'semantic-ui-react'
import YourCourseDetails from './YourCourseDetails.js'



const YourCourses = (props) => {

  return(
    <div id='your-courses-page'>

        <Card.Group id='your-courses-cards' itemsPerRow={5}>
          {props.bookedCourses.map(course => {
           return <YourCourseDetails course={course} />
          })
        }
        </Card.Group>

    </div>



  )




}

export default YourCourses;
