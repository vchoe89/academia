import React from 'react'
import CourseDetails from './CourseDetails.js'
import {Card, Button } from 'semantic-ui-react'


const CourseCard = (props) => {

  return(
    <div id='course-page'>

      <div id='course-page-container'>

      <Card.Group  itemsPerRow={4}>
        {
        props.courses.map(course => {
          return (
          <CourseDetails button={props.button} currentUser={props.currentUser} bookCourse={props.bookCourse} course={course} />
          )
          })
        }
      </Card.Group>

      </div>
      <Button negative onClick={
      () => {

      }
        }>Back</Button>
    </div>

  )
}

export default CourseCard;
//
// <button id='back-button' basic color='red' size='medium' onClick={
//     ()=>{
//       console.log('click');
//     }
//   }>
//   Go Back
//   </button>
