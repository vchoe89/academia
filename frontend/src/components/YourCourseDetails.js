import React from 'react'
import {Card} from 'semantic-ui-react'


const YourCourseDetails = (props) => {

  return(
          <Card>
            <Card.Content>
              <Card.Header>{props.course.name}</Card.Header>
                <Card.Meta>Located in: {props.course.location}</Card.Meta>
            </Card.Content>
          </Card>


  )
}


export default YourCourseDetails;
