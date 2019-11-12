import React from 'react'
import {Card, Grid, Container} from 'semantic-ui-react'
import Categories from './Categories.js'


const MainContainer = (props) => {

  return(
    <Container textAlign='center'>
        <Card.Group itemsPerRow={4} >
      {
        props.categories.map(catObj => {
        return <Categories className={catObj.name} catObj={catObj.name} key={catObj.name}/>
      })
    }
      </Card.Group>
    </Container>
  )
}


export default MainContainer;
