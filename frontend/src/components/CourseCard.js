import React from 'react'
import {Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const CourseCard = (props) => {
  return(
    props.courses.map(course => {
      return <Card key={course.id}>
        <Link>
          <h1>{course.name}</h1>
          <h4>{course.location}</h4>
        </Link>
      </Card>
    })
  )
}

export default CourseCard;
