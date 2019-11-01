import React, { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/Welcome.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import MainContainer from './components/MainContainer.js'
import { useFetch } from './Hooks/useFetch.js'
const URL = 'http://localhost:3000/users'


function App() {

  let usersFetch = useFetch(URL, [])

  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(usersFetch)
  },[usersFetch])

    return(
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/main" render={() => {return <MainContainer users={users}/>}}/>
        </Switch>
      </Router>

    )
}


export default App;
