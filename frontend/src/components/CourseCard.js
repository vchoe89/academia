import React, {useState} from 'react'
import CourseDetails from './CourseDetails.js'
import {Card, Button, Popup} from 'semantic-ui-react'

const CourseCard = (props) => {

  const [button, setButton] = useState(false)

  const bookTutor = (e, data) => {
    let toggle = e.target.disabled
    let courseName = props.courses.find(course => course.name === e.target.parentElement.parentElement.firstElementChild.innerText).name
    if(courseName === e.target.parentElement.parentElement.firstElementChild.innerText){
      let toggle = !e.target.disabled
    }
  }

  return(
    props.courses.map(course => {
      return <CourseDetails  bookCourse={props.bookCourse} course={course} button={button}/>
    })
  )
}

export default CourseCard;
