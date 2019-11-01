import React from 'react'
import {Card} from 'semantic-ui-react'
const URL = 'http://localhost:3000/courses'

const CourseCard = (props) => {



  return (
    <Card className='ui centered card'>
      <Card.Header> {props.course.name} </Card.Header>
    </Card>

  )
}

export default CourseCard;
