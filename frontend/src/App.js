import React, { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/Welcome.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import MainContainer from './components/MainContainer.js'
import About from './components/About.js'
import { useFetch } from './Hooks/useFetch.js'
import Categories from './components/Categories.js'
import CourseCard from './components/CourseCard.js'
import _ from 'lodash';
import {map} from 'lodash'
const URL = 'http://localhost:3000/'





function App() {

  let coursesFetch = useFetch(URL+'courses', [])
  let categoriesFetch = useFetch(URL+'categories', [])

  const [courses, setCourses] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCourses(coursesFetch)
  },[coursesFetch])

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
              debugger
              let categoryId = props.match.url.slice(1)
              let categoryObj = courses.find(category => category.name === categoryId).courses
              return <CourseCard courses={categoryObj}/>
            }}/>

        <Route exact path="/english" render={(props) => {
              let categoryId = props.match.url.slice(1)
              let categoryObj = courses.find(category => category.name === categoryId).courses
              return <CourseCard courses={categoryObj}/>
            }}/>

          <Route exact path="/science" render={(props) => {
              let categoryId = props.match.url.slice(1)
              let categoryObj = courses.find(category => category.name === categoryId).courses
              return <CourseCard courses={categoryObj}/>
            }}/>

        <Route exact path="/music" render={(props) => {
                let categoryId = props.match.url.slice(1)
                let categoryObj = courses.find(category => category.name === categoryId).courses
                return <CourseCard courses={categoryObj}/>
              }}/>

        <Route exact path="/sports" render={(props) => {
                let categoryId = props.match.url.slice(1)
                let categoryObj = courses.find(category => category.name === categoryId).courses
                return <CourseCard courses={categoryObj}/>
              }}/>

            <Route exact path="/about" component={About} />
        </Switch>
      </Router>

    )
}


export default App;
