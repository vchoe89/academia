import React, {useState, useEffect} from 'react'
import {Card} from 'semantic-ui-react'
import {useFetch} from '../Hooks/useFetch.js'
const URL = "http://localhost:3000/courses"

const Categories = (props) => {

  let coursesFetch = useFetch(URL, [])
  const [courses, setCourses] = useState([])

  useEffect(() => {
    setCourses(coursesFetch)
  },[coursesFetch])





  return(
    <Card onClick={(e) => props.showDetails(e)}>
      <Card.Header>{props.category}</Card.Header>
    </Card>
  )
}

export default Categories;
