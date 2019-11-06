import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Card} from 'semantic-ui-react'

const Categories = (props) => {

  return(
        <Grid.Row>
            <Card users={props.users}>
              <Link to={`${props.catObj}`}>
                <div className={props.catObj}> <h1 className='categories'>{props.catObj} </h1></div> 
              </Link>
            </Card>
          </Grid.Row>

  )
}

export default Categories;
