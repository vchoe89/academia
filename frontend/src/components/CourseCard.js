import React from 'react'
import {Card, Button, Popup} from 'semantic-ui-react'
import {useFetch} from '../Hooks/useFetch.js'

const CourseCard = (props) => {



  const bookTutor = (e) => {
    let toggle = e.target.disabled
    let courseName = props.courses.find(course => course.name === e.target.parentElement.parentElement.firstElementChild.innerText).name
    if(courseName === e.target.parentElement.parentElement.firstElementChild.innerText){
  
    }
  }

  return(
    props.courses.map(course => {
      return <Card className='courses' key={course.id} >
          <h1 className='course name'>{course.name}</h1>
            Taught by:
            <Popup
              content={course.instructor.education}
              on='click'
              position='bottom center'
              trigger={<h5 className='popup'>{course.instructor.name}</h5>}
              />
          <h4>${course.hourly_rate} per hour</h4>
          <h4>Located in: {course.location}</h4>
          <div className='book button'><Button color='green' disabled={true} onClick={(e)=>bookTutor(e)}>Book</Button></div>
      </Card>
    })
  )
}

export default CourseCard;
