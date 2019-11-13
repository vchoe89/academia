import React from 'react'
import {Card, Grid, Container, Image} from 'semantic-ui-react'
import Categories from './Categories.js'


const MainContainer = (props) => {

  return(
    <React.Fragment>
    <div id='main-category-container'>
      <div>
        <div id='category-title'>
      <h1 className='category header'>Categories</h1>
        <p className='category description'>Narrow your search by selecting a category</p>
        </div>
        <Card.Group id='category-cards'>
      {
        props.categories.map(catObj => {
        return <Categories className={catObj.name} catObj={catObj.name} key={catObj.name}/>
      })
    }
      </Card.Group>
      </div>
    </div>

    </React.Fragment>
  )
}


export default MainContainer;
