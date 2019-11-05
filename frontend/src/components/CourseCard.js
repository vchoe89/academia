import React, {useState, useEffect} from 'react'
import {Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {useFetch} from '../Hooks/useFetch.js'
const URL = 'http://localhost:3000/courses'


const CourseCard = (props) => {

  let coursesFetch = useFetch(URL, [])
  const [courses, setCourses] = useState([])

  useEffect(() => {
    setCourses(coursesFetch)
  },[coursesFetch])

  const filterCourses = () => {
    return courses.filter(course => {
      return course.category.id === props.courses.category_id})

  }



  return(

    <Card filterCourses={filterCourses()}>
      
    </Card>


  //   props.courses.map(course => {
  //     return <Card courses={courses} key={course.id}>
  //       <Link>
  //         <h1>{course.name}</h1>
  //         <h4>${course.hourly_rate} per hour</h4>
  //         <h4>{course.location}</h4>
  //         <h5></h5>
  //       </Link>
  //     </Card>
  //   })
  )
}

export default CourseCard;
