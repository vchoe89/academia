import React from 'react'
import FeaturedClasses from './FeaturedClasses.js'
import {Card, Grid, Container, Image} from 'semantic-ui-react'
import Categories from './Categories.js'
import {Animated} from "react-animated-css";



const MainContainer = (props) => {

  return(
    <React.Fragment>
    <div id='main-category-container'>
        <div id='category-title'>
          <Animated animationIn='flipInX' animationInDuration={2500}>
            <h1 className='category header'>Categories</h1>
          </Animated>
          <Animated animationIn='slideInLeft' animationInDuration={2500}>
            <p className='category description'>Narrow your search by selecting a category</p>
          </Animated>
        </div>
        <Card.Group id='category-cards'>
      {
        props.categories.map(catObj => {
        return <Categories className={catObj.name} catObj={catObj.name} key={catObj.name}/>
      })
    }
      </Card.Group>
    </div>
    <FeaturedClasses courses={props.courses}/>
    </React.Fragment>
  )
}


export default MainContainer;
