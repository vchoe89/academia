import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Card} from 'semantic-ui-react'

const Categories = (props) => {

  return(
    <Grid relaxed column={4}>
      <Grid.Column>
        <Card>
          <Link to={`${props.catObj}`}> {props.catObj} </Link>
        </Card>

      </Grid.Column>
    </Grid>

  )
}

export default Categories;
