import React,{useState} from 'react'
import {Card, Button, Popup} from 'semantic-ui-react'

const CourseDetails = (props) => {


  return(
    <Card.Group>
      <Card >
        <Card.Content>
          <Card.Header>{props.course.name}</Card.Header>
          <Card.Meta>Taught by: {props.course.instructor.name}</Card.Meta>
          <Card.Description>${props.course.hourly_rate} per hour</Card.Description>
          <Card.Description>Located in: {props.course.location}</Card.Description>
        </Card.Content>
          <Card.Content extra>
                <div className='book button'>
                  <Button color='green' disabled={props.currentUser.booked_courses.map(course => course.id).includes(props.course.id) ? true : false} onClick={(e) => props.bookCourse(props.course, props.currentUser)} >Book</Button>
                </div>
          </Card.Content>
      </Card>
    </Card.Group>

  )
}

export default CourseDetails;


// <Card className='courses' key={props.course.id} >
//     <h1 className='course name'>{props.course.name}</h1>
//       Taught by:
//       <Popup
//         content={props.course.instructor.education}
//         on='click'
//         position='bottom center'
//         trigger={<h5 className='popup'>{props.course.instructor.name}</h5>}
//         />
//       <h4>${props.course.hourly_rate} per hour</h4>
//     <h4>Located in: {props.course.location}</h4>
//     <div className='book button'>
//       <Button color='green' disabled={false} onClick={(e) => props.bookCourse(props.course)} >Book</Button>
//     </div>
// </Card>
