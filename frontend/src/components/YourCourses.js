import React, {useState} from 'react'
import { Card } from 'semantic-ui-react'



const YourCourses = (props) => {

  return(
    <React.Fragment>
    <h1>Past Courses</h1>
      <Card.Group>
        <Card>
          <Card.Content>
            {props.filterCourses.map(course => {
              return <Card >
                <Card.Header className='your courses card' >{course.name}</Card.Header>

              </Card>
            })}
            {props.filterReviews.map(review => {
              return <Card.Description>{review.content}</Card.Description>
            })}
          </Card.Content>
        </Card>
      </Card.Group>
      </React.Fragment>
  )




}

export default YourCourses;
