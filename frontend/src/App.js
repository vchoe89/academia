import React, { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/Welcome.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import MainContainer from './components/MainContainer.js'
import { useFetch } from './Hooks/useFetch.js'
import Categories from './components/Categories.js'
import CourseCard from './components/CourseCard.js'
const URL = 'http://localhost:3000/categories'


function App() {

  let categoriesFetch = useFetch(URL, [])

  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories(categoriesFetch)
  },[categoriesFetch])

    return(
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/main" render={(props) => {
              return <MainContainer categories={categories}/>}}/>

          <Route exact path="/math" render={(props) => {
              let categoryId = props.match.url.slice(1)
              let categoryObj = categories.find(category => category.name === categoryId).courses
              return <CourseCard courses={categoryObj}/>
            }}/>

        <Route exact path="/english" render={(props) => {
              let categoryId = props.match.url.slice(1)
              let categoryObj = categories.find(category => category.name === categoryId).courses
              return <CourseCard courses={categoryObj}/>
            }}/>

          <Route exact path="/science" render={(props) => {
              let categoryId = props.match.url.slice(1)
              let categoryObj = categories.find(category => category.name === categoryId).courses
              return <CourseCard courses={categoryObj}/>
            }}/>

        <Route exact path="/music" render={(props) => {
                let categoryId = props.match.url.slice(1)
                let categoryObj = categories.find(category => category.name === categoryId).courses
                return <CourseCard courses={categoryObj}/>
              }}/>

        <Route exact path="/sports" render={(props) => {
                let categoryId = props.match.url.slice(1)
                let categoryObj = categories.find(category => category.name === categoryId).courses
                return <CourseCard courses={categoryObj}/>
              }}/>
        </Switch>
      </Router>

    )
}


export default App;
