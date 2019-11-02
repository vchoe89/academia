import React from 'react'
import {Grid} from 'semantic-ui-react'
import Categories from './Categories.js'

const MainContainer = (props) => {
  return(
    <Grid>
      <Grid.Column width={8}>
        {props.categories.map(catObj => {
          return <Categories catObj={catObj.name} key={catObj.name}/>
        })}
      </Grid.Column>
    </Grid>

  )
}


export default MainContainer;
