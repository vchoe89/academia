import React, {useState, useEffect} from 'react'
import { useFetch } from '../Hooks/useFetch.js'
import {Grid} from 'semantic-ui-react'
import CourseCard from './CourseCard.js'
import Categories from './Categories.js'

const URL = "http://localhost:3000/categories"

const MainContainer = (props) => {

  let categoryFetch = useFetch(URL, [])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories(categoryFetch)
  },[categoryFetch])

  const showDetails = (e) => {
    console.log(e.target.innerText)
  }

  return(
    <Grid relaxed columns={4}>
      {categories.map(category => {
        return <Categories showDetails={showDetails} category={category.name} key={category.id}/>
      })}
    </Grid>

  )
}


export default MainContainer;
