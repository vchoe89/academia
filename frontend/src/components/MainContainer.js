import React from 'react'
import {Grid, Container} from 'semantic-ui-react'
import Categories from './Categories.js'


const MainContainer = (props) => {

  return(
    <Container textAlign='center'>
      <Grid>
      {
        props.categories.map(catObj => {
        return <Categories className={catObj.name} catObj={catObj.name} key={catObj.name}/>
      })
    }
      </Grid>
    </Container>
  )
}


export default MainContainer;
