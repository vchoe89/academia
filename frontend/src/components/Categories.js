import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'semantic-ui-react'
import {Animated} from "react-animated-css";


const Categories = (props) => {

  return(
            <Card className='course cards'users={props.users}>
              <Link to={`${props.catObj}`}>
                <div className={props.catObj}> <h1 className='categories'>{props.catObj} </h1></div>
              </Link>
            </Card>
  )
}

export default Categories;
