import React from 'react'
import {Animated} from "react-animated-css";
import CourseCard from './CourseCard.js'


const FeaturedClasses = (props) => {

  return(
    <div id='featured-component'>
      <h1 id='featured-header'>Featured Classes</h1>
        {props.courses.map(course => {
          return <CourseCard course={course}/>
        })
        }
        
    </div>


  )
}


export default FeaturedClasses;
