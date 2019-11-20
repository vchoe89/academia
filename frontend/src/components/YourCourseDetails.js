import React from 'react'
import {Card} from 'semantic-ui-react'
import BeautyStars from 'beauty-stars';


const YourCourseDetails = (props) => {

  return(
          <Card id='your-course-details-card'>
            <Card.Content>
              <Card.Header id='your-details-header' >{props.course.name}</Card.Header>
                <Card.Meta id='location-line' >Located in: {props.course.location}</Card.Meta>
                  {props.course.own_review === null ? null : <Card.Description>{props.course.own_review.content}</Card.Description>}
                  <br></br>
                  <Card.Header>Your Rating:</Card.Header>
                  <BeautyStars
                    id='stars'
                    maxStars={5}
                    inactiveColor='#FFED76'
                    value={props.course.own_review.rating}
                    editable='true'
                    size='20px'
                    />
            </Card.Content>
          </Card>


  )
}


export default YourCourseDetails;
