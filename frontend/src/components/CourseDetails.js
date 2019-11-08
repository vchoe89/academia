import React from 'react'
import {Card, Button, Popup} from 'semantic-ui-react'

const CourseDetails = (props) => {

  return(
    <Card className='courses' key={props.course.id} >
        <h1 className='course name'>{props.course.name}</h1>
          Taught by:
          <Popup
            content={props.course.instructor.education}
            on='click'
            position='bottom center'
            trigger={<h5 className='popup'>{props.course.instructor.name}</h5>}
            />
          <h4>${props.course.hourly_rate} per hour</h4>
        <h4>Located in: {props.course.location}</h4>
        <div className='book button'>
          <Button color='green' disabled={false} onClick={(e) => props.bookCourse(props.course)} >Book</Button>
        </div>
    </Card>
  )
}

export default CourseDetails;
